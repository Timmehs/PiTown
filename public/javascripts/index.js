$(function() {

  $('.buttons-container').on('click', 'button', function (e) {
    var $btn  = $(this);
    $.post("/button/" + this.id, function (e) {
      console.log(e.message);
      if (e.status == 0) {
        $btn.addClass('on');
      } else {
        $btn.removeClass('on');
      }
    });
  });

  $('html').on('keyup', function (e) {
    console.log(e.keyCode);
    if (e.keyCode < 57 && e.keyCode > 48) {
        $('#' + (e.keyCode - 49)).trigger('click');
    }
  });
});
