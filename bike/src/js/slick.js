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

$('.rating__list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.rating__list-nav'
});
$('.rating__list-nav').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.rating__list',
  arrows: false,  
  dots: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});