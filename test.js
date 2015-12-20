
var GPIO = require('onoff').Gpio;
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

function switchOn() {
    for (var i = 0; i < leds.length; i++) {
        leds[i].writeSync(0);
    }
}

function switchOff() {
    for (var i = 0; i < leds.length; i++) {
        leds[i].writeSync(1);
    }
}


switchOn();

switchOff();
function exit() {
    switchOff();
    for (var i = 0; i < leds.length; i++) {
        leds[i].unexport();
    }
    console.log('Ta ta');
    process.exit();
}

process.on('SIGINT', exit);


