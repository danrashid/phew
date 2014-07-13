$(function() {

  var patterns = {
    // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    number: /[\d,\.]+/
  };

  $(document).on('click', 'button[type=submit]', function () {
    var doSubmit = true,
      $form = $(this).closest('form');

    $form.find('fieldset[data-required]')
      .removeClass('invalid')
      .each(function () {
        var $fieldset = $(this);

        if ($fieldset.find(':checked').length < 1) {
          doSubmit = false;
          $fieldset.addClass('invalid');
        }
      });

    $form.find('input:not([type=checkbox]):not([type=radio]), select, textarea')
      .removeClass('invalid')
      .each(function () {
        var $field = $(this),
          fieldValue = $.trim($field.val()),
          typePattern = patterns[$field.attr('type')];

        $field.val(fieldValue);
        if (
          ($field.is('[required]') && fieldValue === '') ||
          (typePattern !== undefined && typePattern.test(fieldValue) === false)
        ) {
          doSubmit = false;
          $field.addClass('invalid');
        }
      });

    return doSubmit;
  });
});
