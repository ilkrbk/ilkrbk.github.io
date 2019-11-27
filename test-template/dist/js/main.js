function initMap() {
  map = new google.maps.Map(document.getElementById("map"), { center: { lat: 40.689856, lng: -73.906263 }, zoom: 12, styles: [{ featureType: "all", elementType: "labels.text.fill", stylers: [{ saturation: 36 }, { color: "#000000" }, { lightness: 40 }] }, { featureType: "all", elementType: "labels.text.stroke", stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 16 }] }, { featureType: "all", elementType: "labels.icon", stylers: [{ visibility: "off" }] }, { featureType: "administrative", elementType: "geometry.fill", stylers: [{ color: "#000000" }, { lightness: 20 }] }, { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#000000" }, { lightness: 17 }, { weight: 1.2 }] }, { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 20 }] }, { featureType: "poi", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 21 }] }, { featureType: "road.highway", elementType: "geometry.fill", stylers: [{ color: "#000000" }, { lightness: 17 }] }, { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#000000" }, { lightness: 29 }, { weight: .2 }] }, { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 18 }] }, { featureType: "road.local", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 16 }] }, { featureType: "transit", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 19 }] }, { featureType: "water", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 17 }] }] });new google.maps.Marker({ position: { lat: 40.689856, lng: -73.906263 }, map: map, icon: "https://ikorobka.github.io/finish/template/dist/img/map-marker.png" });
}$(function () {
  $(".scroll-to-top").on("click", function () {
    $("body, html").animate({ scrollTop: 0 }, 500);
  }), $(window).on("scroll", function () {
    var e = $(".video").height();_btn = $(".scroll-to-top"), $(window).scrollTop() >= e ? _btn.addClass("scroll-to-top--active") : _btn.removeClass("scroll-to-top--active");
  });
}), $(".parallax-window").parallax({ imageSrc: "https://ikorobka.github.io/finish/template/dist/img/bg-parallax.jpg", speed: .5 }), $(document).ready(function () {
  $(".faqs__title-item").on("click", function () {
    $(this).hasClass("active") ? ($(this).removeClass("active"), $(this).siblings(".faqs__descr-item").slideUp(200), $(".faqs__title-item i").removeClass("fa-minus-circle").addClass("fa-plus-circle")) : ($(".faqs__title-item i").removeClass("fa-minus-circle").addClass("fa-plus-circle"), $(this).find("i").removeClass("fa-plus-circle").addClass("fa-minus-circle"), $(".faqs__title-item").removeClass("active"), $(this).addClass("active"), $(".faqs__descr-item").slideUp(200), $(this).siblings(".faqs__descr-item").slideDown(200));
  });
}), $(".team__list").slick({ dots: !1, infinite: !0, arrows: !1, autoplay: !0, autoplaySpeed: 1e3, speed: 300, slidesToShow: 4, slidesToScroll: 1, responsive: [{ breakpoint: 1240, settings: { slidesToShow: 3, slidesToScroll: 1 } }, { breakpoint: 800, settings: { slidesToShow: 2, slidesToScroll: 1 } }, { breakpoint: 550, settings: { slidesToShow: 1, slidesToScroll: 1 } }] }), $(".testimonials__list").slick({ arrows: !1, slidesToShow: 1, dots: !0, slidesToScroll: 1, autoplay: !0, autoplaySpeed: 1e3 }), $(".advertising__list").slick({ slidesToShow: 4, slidesToScroll: 1, autoplay: !0, autoplaySpeed: 1e3, responsive: [{ breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1, autoplay: !0, autoplaySpeed: 1e3 } }, { breakpoint: 450, settings: { slidesToShow: 1, slidesToScroll: 1, autoplay: !0, autoplaySpeed: 1e3 } }] });var modal = document.getElementById("modal"),
    span = document.querySelectorAll(".modal__close")[0];span.addEventListener("click", () => {
  modal.style.display = "none";
});var i,
    images = document.querySelectorAll(".advertising__img"),
    modalImg = document.getElementById("modal1"),
    captionText = document.getElementById("caption");for (i = 0; i < images.length; i++) images[i].onclick = function () {
  modal.style.display = "block", modalImg.src = this.src;
};var slinky = $(".js-menu").slinky({ title: !1 });function Navigation(e) {
  this.btn = document.getElementById(e.btnId), this.nav = document.getElementById(e.navigationId), this.overlay = document.createElement("div"), this.openNav_ = () => {
    document.body.appendChild(this.overlay), setTimeout(() => this.nav.classList.add(e.activeNavClass), 200);
  }, this.hideNav_ = t => {
    (document.querySelector(`.${e.overlayClass}`) && 27 === t.keyCode || "click" === t.type || "dragend" === t.type) && (this.nav.classList.remove(e.activeNavClass), this.nav.hasAttribute("style") && this.nav.removeAttribute("style"), setTimeout(() => document.body.removeChild(this.overlay), 200));
  }, this.dragStart_ = e => {
    let t = 270 - e.screenX;t < 270 && (this.nav.style.transform = `translateX(${-t}px)`);
  }, this.events_ = () => {
    this.btn.addEventListener("click", this.openNav_), this.overlay.addEventListener("click", this.hideNav_), window.addEventListener("keyup", this.hideNav_), this.nav.addEventListener("drag", this.dragStart_), this.nav.addEventListener("dragend", this.hideNav_);
  }, this.init_ = () => {
    this.events_(), this.overlay.classList.add(e.overlayClass), console.log(e.navigationId);
  }, this.init_();
}const nav = { btnId: "header__wrap-icon", navigationId: "header-top", activeNavClass: "header-top--active", overlayClass: "overlay" },
      offCanvas = new Navigation(nav);