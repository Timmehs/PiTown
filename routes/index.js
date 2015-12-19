var express = require('express');
var router = express.Router();
var os = require('os');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'PiTown',
    localIp: os.networkInterfaces().en0[1].address
  });
});

module.exports = router;
