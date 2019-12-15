jQuery(document).ready(function(){    
    $('.header__wrap-icon-btn').click(function(){
            $('.header__icon-btn').toggleClass('header__btn--active');
            $('.header__wrap-icon-btn').toggleClass('header__wrap-btn--active');            
            $('.header__nav').toggleClass('header__nav--active');
    });
});
$('.partner__list').slick({
    centerMode: true,
    arrows: false,
    centerPadding: '60px',
    slidesToShow: 5,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

