var express = require('express');
var router = express.Router();

var db = require('./queries');

/* GET home page. */
router.put('/:id', db.updateTask);

module.exports = router;
