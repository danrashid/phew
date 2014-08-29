$(function() {

  function close($expand) {
    $expand
      .removeClass('open')
      .next()
        .height(null)
        .css({
          'padding-top': null,
          'padding-bottom': null
        });
  }

  $(document).on('click', '.expand, .accordion > dt', function () {
    var $this = $(this),
      $target = $this.next(),
      targetHeight = $target.height(),
      targetCss = $target.css(['padding-top', 'padding-bottom']),
      duration;

    $target
      .height(0)
      .css({
        'padding-top': 0,
        'padding-bottom': 0
      });

    if ($this.hasClass('open')) {
      duration = parseFloat($target.css('transition-duration')) * 1000;

      window.setTimeout(function () {
        close($this);
      }, duration);
    } else {
      $this.addClass('open');
      close($this.siblings('dt'));
      $target
        .height(targetHeight)
        .css({
          'padding-top': targetCss['padding-top'],
          'padding-bottom': targetCss['padding-bottom']
        });
    }

    return false;
  });
});
