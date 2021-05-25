var express = require('express');
var router = express.Router();
var controller = require('../constrollers/index')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post( "/", controller.sendMessage );

module.exports = router;
