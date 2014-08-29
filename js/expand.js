$(function() {

  $(document).on('click', '.expand', function () {
    var $a = $(this),
      $target = $a.next(),
      targetHeight = $target.height(),
      duration;

    $target.height(0);

    if ($a.hasClass('open')) {
      duration = parseFloat($target.css('transition-duration')) * 1000;

      window.setTimeout(function () {
        $a.removeClass('open');
        $target.height(null);
      }, duration);
    } else {
      $a.addClass('open');
      $target.height(targetHeight);
    }
  });
});
