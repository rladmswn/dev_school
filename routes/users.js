var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/K', function(req, res, next) {
  res.send('KKK');
});

router.get('/E', function(req, res, next) {
  res.json({ name : 'eunju', age :25 });
});

module.exports = router;
