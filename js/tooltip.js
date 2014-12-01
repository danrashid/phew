/* global $ */
'use strict';

$(document).on('click', function (e) {
  var $target = $(e.target),
    $tooltip,
    wasOpen;

    if ($target.is('[data-tooltip-id]')) {
      $tooltip = $('#' + $target.data('tooltipId'));
      wasOpen = $tooltip.hasClass('open');

      $('.tooltip').removeClass('open');
      if (!wasOpen) {
        console.log($target.height());
        $tooltip
          .addClass('open')
          .css({
            left: $target.position().left + $target.width() / 2,
            top: $target.position().top + $target.height()
          });
      }
      return false;
    }

    if ($target.closest('.tooltip').length > 0) {
      return false;
    }

    $('.tooltip').removeClass('open');
});
