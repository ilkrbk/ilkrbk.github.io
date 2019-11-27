    $(document).ready(function() {
        $(".faqs__title-item").on("click", function() {
          if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
              .siblings(".faqs__descr-item")
              .slideUp(200);
            $(".faqs__title-item i")
              .removeClass("fa-minus-circle")
              .addClass("fa-plus-circle");
          } else {
            $(".faqs__title-item i")
              .removeClass("fa-minus-circle")
              .addClass("fa-plus-circle");
            $(this)
              .find("i")
              .removeClass("fa-plus-circle")
              .addClass("fa-minus-circle");
            $(".faqs__title-item").removeClass("active");
            $(this).addClass("active");
            $(".faqs__descr-item").slideUp(200);
            $(this)
              .siblings(".faqs__descr-item")
              .slideDown(200);
        }
      });
    });