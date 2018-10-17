var express = require('express');
var router = express.Router();

var db = require('./queries');

/* GET home page. */
router.delete('/:id', db.removeTask);

module.exports = router;
