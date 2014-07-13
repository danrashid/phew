$(function() {

  $(document).on('click', function (e) {
    var $target = $(e.target),
      clickedInMenu = $target.is('.dropdown + *, .dropdown + * :not(a)'),
      clickedClosed = !$target.is('.open'),
      targetWidth,
      $menu;

    if (!clickedInMenu) {
      $('.dropdown').removeClass('open');

      if ($target.is('.dropdown')) {
        if (clickedClosed) {
          targetWidth = $target.width();
          $menu = $target.next();

          $target.addClass('open');

          $menu
            .css('min-width', targetWidth)
            .css('left', ($target.position().left + (targetWidth / 2)) - ($menu.width() / 2));
        }
        return false;
      }
    }
  });
});
