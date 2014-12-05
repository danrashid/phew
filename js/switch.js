/* global $ */
'use strict';

$(document).on('click', '.switch input', function () {
  $(this).parent('.switch').toggleClass('checked');
});
