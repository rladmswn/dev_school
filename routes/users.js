var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/K', function(req, res, next) {
  res.send('KdfsKK');
});

router.get('/E', function(req, res, next) {
  res.json({ name : 'eunju', dsfsdfas : 12312 });
});

module.exports = router;
