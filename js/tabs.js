/* global $ */
'use strict';

$(function () {
  var $tabLinks = $('.tabs a'),
    $tabPanels = $('.tab-content');

  function toggleTab() {
    var hash = window.location.hash.length > 1 ? window.location.hash : $tabLinks.first().attr('href');

    $tabLinks.removeClass('active')
      .filter('[href=' + hash + ']')
        .addClass('active');

    $tabPanels.hide()
      .filter(hash)
        .fadeIn();
  }

  $(window).on('hashchange', toggleTab);

  toggleTab();
});
