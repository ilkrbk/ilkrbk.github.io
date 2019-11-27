jQuery(document).ready(function(){    
    $('.header__wrap-icon-btn').click(function(){
            $('.header__icon-btn').toggleClass('header__btn--active');
            $('.header__wrap-icon-btn').toggleClass('header__wrap-btn--active');            
            $('.header__nav').toggleClass('header__nav--active');
    });
});

function scrolling_(){
    this.list = document.querySelector(".header__list");
    
    this.list.addEventListener('click', (e) =>{
        e.preventDefault()
        this.posElem = document.querySelector(e.target.getAttribute('href')).getBoundingClientRect().y
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop
        if (0 < this.posElem){
            $('body, html').animate({
                scrollTop: this.posElem + this.scrollTop
              }, 500)
        } else {         
            $('body, html').animate({
                scrollTop: this.posElem + this.scrollTop
              }, 500)
        }
    });
}
scrolling_();