$(function() {

  var $tabs = $('.tabs a'),
    $panels;

  function show(hash) {
    $tabs
      .removeClass('active')
      .filter('[href="' + hash + '"]')
        .addClass('active');

    $panels
      .hide()
      .filter('[data-tab="' + hash.slice('1') + '"]').show();
  }

  $tabs.on('click', function () {
    show($(this).attr('href'));
  });

  if ($tabs.length > 0) {
    var hash = window.location.hash || $tabs.parents('li:first-child').find('a').attr('href');

    $panels = $('[data-tab]');
    show(hash);
  }
});
