/* global $ */
'use strict';

(function () {
  var inputPatterns = {
    // http://www.regular-expressions.info/index.html
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    numeric: /^-?[\d,\.]+$/
  };

  function validate($input) {
    var pattern = $input.attr('pattern') || inputPatterns[$input.attr('type')] || /.+/,
      isValid = (new RegExp(pattern)).test($.trim($input.val()));

    return isValid;
  }

  $(document).on('submit', 'form[novalidate]', function () {
    var allValid = true,
      $form = $(this);

    $form.find('input:not([type=checkbox]), select, textarea').each(function () {
      var isValid = true,
        $input = $(this),
        $matchInput;

      switch (true) {
        case $input.is('[required]'):
          isValid = validate($input);
          break;

        case $input.is('[data-match-id]'):
          $matchInput = $('#' + $input.data('matchId'));
          isValid = $input.val() === $matchInput.val();
          break;

        case $input.val() !== '':
          isValid = validate($input);
          break;
      }
      $input.toggleClass('invalid', !isValid);
      allValid = allValid && isValid;
    });

    return allValid;
  });
})();
