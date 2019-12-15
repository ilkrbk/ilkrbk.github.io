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
  $(function () { 
      var target_block = $(".rating__list-nav");
      var blockStatus = true;  
      $(window).scroll(function() { 
          var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height())); 
          if(scrollEvent && blockStatus) {  
              blockStatus = false;
                  function countUp(numberElement) {
                      let current = 0;
                      const total = parseInt(numberElement.textContent);
                      const increment = Math.ceil(total / 100);
                      
                      function step() {
                      current += increment;
                      if (current > total) current = total;
                      numberElement.textContent = current.toLocaleString();
                      (current !== total) && requestAnimationFrame(step);
                      }
                      step();
                  }
                  
                  document.querySelectorAll('.rating__num-nav').forEach(elem => countUp(elem));
              }
          }); 
      });
  