var express = require('express');
var router = express.Router();

var db = require('./queries');

/* GET home page. */
router.get('/', db.getAllTasks);

module.exports = router;
