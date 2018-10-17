var express = require('express');
var router = express.Router();

var db = require('./queries');

/* GET home page. */
router.get('/:id', db.getSingleTask);

module.exports = router;
