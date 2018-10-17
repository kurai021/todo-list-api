var express = require('express');
var router = express.Router();

var db = require('./queries');

/* GET home page. */
router.post('/', db.createTask);

module.exports = router;
