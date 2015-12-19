$(function() {


  var states = ['off', 'off', 'off', 'off', 'off', 'off', 'off', 'off'];

  $('.buttons-container').on('click', 'button', function (e) {
    console.log('Button ' + this.id + 'clicked');
  });
});
