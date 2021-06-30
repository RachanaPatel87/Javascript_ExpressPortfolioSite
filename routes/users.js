var express = require('express');
const nodemon = require('nodemon');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This is User view.');
});

module.exports = router;
 