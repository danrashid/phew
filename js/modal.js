/* global $ */
'use strict';

$(function () {
  var $modalScreen = $('<div id="modal-screen">').appendTo('body');

  function closeModal() {
    $('.modal').fadeOut(250, function () {
      $(this).removeClass('open');
    });
    $modalScreen.fadeOut(250);
  }

  $(document)
    .on('click', function (e) {
      var $target = $(e.target),
        clickedClose = $target.is('.close, .cancel');

      if ($target.is('[data-modal-id]')) {
        $('#' + $target.data('modalId'))
          .fadeIn(250, function () {
            $(this).addClass('open');
          });

        $modalScreen.fadeIn(250);
        return false;
      }

      if ($target.closest('.modal').length > 0 && !clickedClose) {
        return true;
      }

      closeModal();
      return !clickedClose;
    })
    .on('keyup', function (e) {
      if (e.keyCode === 27) { // Escape
        closeModal();
      }
    });
});
