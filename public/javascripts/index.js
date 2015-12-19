$(function() {

  $('.buttons-container').on('click', 'button', function (e) {
    var $btn  = $(this);
    $.post("/button/" + this.id, function (e) {
      console.log(e.message);
      if (e.status === true) {
        $btn.addClass('on');
      } else {
        $btn.removeClass('on');
      }
    });
  });
});
