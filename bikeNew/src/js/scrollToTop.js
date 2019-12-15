$(function() {
    $('.scroll-to-top').on('click', function() {
      $('body, html').animate({
        scrollTop: 0
      }, 500)
    })

    $(window).on('scroll', function() {
      var _block = $('.video').height()
          _btn = $('.scroll-to-top');

      if( $(window).scrollTop() >= _block ) {
        _btn.addClass('scroll-to-top--active');
      } else {
        _btn.removeClass('scroll-to-top--active');
      }
    });
});