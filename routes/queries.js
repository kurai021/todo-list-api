var promise = require('bluebird');
require('dotenv').load();

var options = {
  // Initialization Options
  promiseLib: promise
};

var connection = {
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDB,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD
}

var pgp = require('pg-promise')(options);
var db = pgp(connection);

// add query functions

function getAllTasks(req, res, next) {
  db.any('select * from todos').then(function(data) {
    res.status(200).json({status: 'success', data: data, message: "Retrieved ALL TODOs"});
  }).catch(function(err) {
    return next(err);
  })
}

function getSingleTask(req, res, next) {
  var taskID = parseInt(req.params.id);
  db.one('select * from todos where id = $1', taskID).then(function(data) {
    res.status(200).json({status: 'success', data: data, message: 'Retrieved one task'});
  }).catch(function(err) {
    return next(err);
  })
}

function createTask(req, res, next) {
  db.none('insert into todos(taskname, taskdate, picture, priority, description, place)' +
  'values($(taskname),$(taskdate),$(picture),$(priority),$(description),$(place))',
  req.body)
  .then(function(){
    res.status(200)
      .json({
        status:'success',
        message:'One task inserted'
      });
  })
  .catch(function(err){
    return next(err);
  })
}

function updateTask(req,res,next){
  var taskID = parseInt(req.params.id);

  db.none('update todos set taskname=$1, taskdate=$2, picture=$3, priority=$4, description=$5, place=$6 where id=$7',
    [req.body.taskname, req.body.taskdate, req.body.picture, req.body.priority, req.body.description, req.body.place,
      taskID])
    .then(function(){
      res.status(200)
        .json({
          status: 'success',
          message: 'task updated'
        });
    })
    .catch(function(err){
      return next(err)
    })
}

function removeTask(req,res,next){
  var taskID = parseInt(req.params.id);

  db.result('delete from todos where id=$1',taskID)
    .then(function(result){
      res.status(200)
        .json({
          status: 'success',
          message: 'Task removed'
        })
    })
    .catch(function(err){
      return next(err);
    })
}

module.exports = {
  getAllTasks: getAllTasks,
  getSingleTask: getSingleTask,
  createTask: createTask,
  updateTask: updateTask,
  removeTask: removeTask
};
