$(function() {

  function fadeOut() {
    var $els =  $overlay.add('.modal');

    $els
      .removeClass('fade-in')
      .addClass('fade-out');

    if (isIe9) {
      $els.css('visibility', 'hidden');
    }

    return false;
  }

  var isIe9 = $('html').hasClass('ie9'),
    $overlay = $('<div id="overlay">')
      .prependTo('body')
      .on('click', fadeOut),
    overlayWidth = $overlay.width(),
    overlayHeight = $overlay.height();

  $(document)
    .on('click', '[data-modal]', function () {
      var modalId = $(this).data('modal'),
        $modal = $('#' + modalId),
        $els = $overlay.add($modal);

      $modal.css({
        top: (overlayHeight - $modal.height()) / 2,
        left: (overlayWidth - $modal.width()) / 2
      });

      $els
        .removeClass('fade-out')
        .addClass('fade-in');

      if (isIe9) {
        $els.css('visibility', 'visible');
      }

      return false;
    })
    .on('click', '.modal .close', fadeOut)
    .on('keyup', function (e) {
      if (e.which === 27 && $overlay.hasClass('fade-in')) { // Escape key
        fadeOut();
      }
    });
});
