var express = require('express');
var GPIO = require('onoff').Gpio;
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
var leds = [
        new GPIO(4, 'out'),
        new GPIO(14,'out'),
        new GPIO(15, 'out'),
        new GPIO(17, 'out'),
        new GPIO(18, 'out'),
        new GPIO(27, 'out'),
        new GPIO(22, 'out'),
        new GPIO(24, 'out')
];

router.post('/button/:id', function(req, res, next) {
  var id = req.params.id, status;
  if (leds[id].readSync() == 1) {
    status = 0;
    leds[id].writeSync(status);
  } else {
    status = 1;
   leds[id].writeSync(status);
  }

  res.json({
    'success': true,
    message: req.params.id + ' button toggled',
    status: status
  });
});

module.exports = router;
