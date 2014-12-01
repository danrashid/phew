/* global $ */
'use strict';

$(document).on('click', function (e) {
  var $target = $(e.target),
    $menu,
    wasOpen;

  if ($target.is('.menu > a')) {
    $menu = $target.parent('.menu');
    wasOpen = $menu.hasClass('open');

    $('.menu').removeClass('open');
    if (!wasOpen) {
      $menu.addClass('open');
    }
    return false;
  }

  $('.menu').removeClass('open');
});
