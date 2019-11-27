function scrolling_() {
  this.list = document.querySelector(".header__list"), this.list.addEventListener("click", e => {
    e.preventDefault(), this.posElem = document.querySelector(e.target.getAttribute("href")).getBoundingClientRect().y, this.scrollTop = window.pageYOffset || document.documentElement.scrollTop, this.posElem, $("body, html").animate({ scrollTop: this.posElem + this.scrollTop }, 500);
  });
}function modal() {
  var e = document.getElementById("modal");document.querySelectorAll(".modal__close")[0].addEventListener("click", () => {
    e.style.display = "none";
  });var t,
      l = document.querySelectorAll(".gallery__img"),
      o = document.getElementById("modal1");for (t = 0; t < l.length; t++) l[t].onclick = function () {
    e.style.display = "block", o.src = this.src;
  };
}jQuery(document).ready(function () {
  $(".header__wrap-icon-btn").click(function () {
    $(".header__icon-btn").toggleClass("header__btn--active"), $(".header__wrap-icon-btn").toggleClass("header__wrap-btn--active"), $(".header__nav").toggleClass("header__nav--active");
  });
}), scrolling_(), modal();var btn = document.querySelector(".gallery__btn"),
    list = document.querySelector(".gallery__list"),
    num = 0;function loadData() {
  var e = new XMLHttpRequest();e.open("GET", "https://ikorobka.github.io/myProject/velo/PUG%20SASS/dist/list.json"), e.responseType = "json", e.onreadystatechange = function () {
    if (4 === e.readyState) {
      let t = e.response;if (num < t.length) {
        num++;let e = document.createElement("li");e.classList.add("gallery__item"), list.appendChild(e);let l = document.createElement("img");l.setAttribute("src", `${t[num - 1]}`), l.classList.add("gallery__img"), e.appendChild(l);let o = document.createElement("i");o.classList.add("fas"), o.classList.add("fa-search-plus"), e.appendChild(o), modal();
      }num >= t.length && btn.classList.add("gallery__btn--none");
    }
  }, e.send();
}function blogModal() {
  var e = document.getElementById("blogModal");document.querySelectorAll(".blog__modal--close")[0].addEventListener("click", () => {
    e.style.display = "none", $("body").css("overflow-y", "scroll"), $(".blog__item-descr").css("display", "none");
  });var t,
      l = document.querySelectorAll(".blog__img"),
      o = document.getElementById("blogModal1"),
      n = document.getElementById("blogCaption");for (t = 0; t < l.length; t++) l[t].onclick = function () {
    e.style.display = "block", o.src = this.src, n.innerHTML = this.nextElementSibling.innerHTML, $("body").css("overflow", "hidden"), $("#blogCaption .blog__item-descr").css("display", "block");
  };
}btn.addEventListener("click", loadData), $(function () {
  $(".scroll-to-top").on("click", function () {
    $("body, html").animate({ scrollTop: 0 }, 500);
  }), $(window).on("scroll", function () {
    var e = $(".video").height();_btn = $(".scroll-to-top"), $(window).scrollTop() >= e ? _btn.addClass("scroll-to-top--active") : _btn.removeClass("scroll-to-top--active");
  });
}), blogModal();var blogBtn = document.querySelector(".blog__btn"),
    bloglist = document.querySelector(".blog__list"),
    blognum = 0;function loadBlog() {
  var e = new XMLHttpRequest();e.open("GET", "https://ikorobka.github.io/myProject/velo/PUG%20SASS/dist/blogList.json"), e.responseType = "json", e.onreadystatechange = function () {
    if (4 === e.readyState) {
      let t = e.response;if (blognum < t.length) for (let e = 0; e < 7; e++) {
        blognum++;let e = document.createElement("li");e.classList.add("blog__item"), bloglist.appendChild(e);let l = document.createElement("img");l.setAttribute("src", `${t[blognum - 1].img}`), l.classList.add("blog__img"), e.appendChild(l);let o = document.createElement("div");o.classList.add("blog__text-wrap"), e.appendChild(o);let n = document.createElement("h3");n.classList.add("blog__item-title"), o.appendChild(n), n.innerHTML = t[blognum - 1].title;let i = document.createElement("p");i.classList.add("blog__item-descr"), o.appendChild(i), i.innerHTML = t[blognum - 1].descr, blogModal();let s = document.createElement("footer");s.classList.add("blog__footer"), o.appendChild(s);let a = document.createElement("date");a.classList.add("blog__item-date"), s.appendChild(a), a.innerHTML = t[blognum - 1].date;let r = document.createElement("ul");r.classList.add("blog__social"), s.appendChild(r);for (let e = 0; e < 2; e++) {
          let l = document.createElement("li");l.classList.add("blog__icon-wrap"), r.appendChild(l);let o = document.createElement("i");o.classList.add("blog__icon"), o.classList.add("fas"), o.classList.add(t[blognum - 1].icon[e]), l.appendChild(o);
        }blogModal();
      }blognum >= t.length && blogBtn.classList.add("gallery__btn--none");
    }
  }, e.send();
}function initMap() {
  map = new google.maps.Map(document.getElementById("map"), { center: { lat: 48.4130154, lng: 15.4791684 }, zoom: 6, styles: [{ featureType: "administrative", elementType: "all", stylers: [{ visibility: "on" }, { weight: "1" }] }, { featureType: "administrative.country", elementType: "all", stylers: [{ visibility: "on" }] }, { featureType: "landscape", elementType: "all", stylers: [{ visibility: "simplified" }, { hue: "#0066ff" }, { saturation: 74 }, { lightness: 100 }] }, { featureType: "poi", elementType: "all", stylers: [{ visibility: "simplified" }] }, { featureType: "road", elementType: "all", stylers: [{ visibility: "simplified" }] }, { featureType: "road.highway", elementType: "all", stylers: [{ visibility: "off" }, { weight: .6 }, { saturation: -85 }, { lightness: 61 }] }, { featureType: "road.highway", elementType: "geometry", stylers: [{ visibility: "on" }] }, { featureType: "road.arterial", elementType: "all", stylers: [{ visibility: "off" }] }, { featureType: "road.local", elementType: "all", stylers: [{ visibility: "on" }] }, { featureType: "transit", elementType: "all", stylers: [{ visibility: "simplified" }] }, { featureType: "water", elementType: "all", stylers: [{ visibility: "simplified" }, { color: "#5f94ff" }, { lightness: 26 }, { gamma: 5.86 }] }] });
}blogBtn.addEventListener("click", loadBlog), $(".partner__list").slick({ centerMode: !0, arrows: !1, centerPadding: "60px", slidesToShow: 5, autoplay: !0, responsive: [{ breakpoint: 768, settings: { arrows: !1, centerMode: !0, centerPadding: "40px", slidesToShow: 3 } }, { breakpoint: 480, settings: { arrows: !1, centerMode: !0, centerPadding: "40px", slidesToShow: 1 } }] }), $(".rating__list").slick({ slidesToShow: 1, slidesToScroll: 1, arrows: !0, fade: !0, asNavFor: ".rating__list-nav" }), $(".rating__list-nav").slick({ slidesToShow: 2, slidesToScroll: 1, asNavFor: ".rating__list", arrows: !1, dots: !1, responsive: [{ breakpoint: 768, settings: { arrows: !1, slidesToShow: 1 } }] }), $(function () {
  var e = $(".rating__list-nav"),
      t = !0;$(window).scroll(function () {
    if ($(window).scrollTop() > e.position().top - $(window).height() && t) {
      t = !1, document.querySelectorAll(".rating__num-nav").forEach(e => function (e) {
        let t = 0;const l = parseInt(e.textContent),
              o = Math.ceil(l / 100);!function n() {
          (t += o) > l && (t = l), e.textContent = t.toLocaleString(), t !== l && requestAnimationFrame(n);
        }();
      }(e));
    }
  });
});