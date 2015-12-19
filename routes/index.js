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

/* POST a control toggle. */
var buttons = [
  false, false, false, false, false, false
];

router.post('/button/:id', function(req, res, next) {
  var id = req.params.id;
  var status = buttons[id] = buttons[id] ? false : true;
  res.json({
    'success': true,
    message: req.params.id + ' button toggled',
    status: status
  });
});

module.exports = router;
