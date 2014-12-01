/* global $ */
'use strict';

$(document).on('click', '.accordion dt a', function () {
  $(this).closest('dt').toggleClass('open');
  return false;
});
