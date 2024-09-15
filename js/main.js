$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  lazyLoad();
  /************************************ Fixed Header ************************************/
  $(this).scrollTop() >= 150
    ? $("header").addClass("fixed")
    : $("header").removeClass("fixed ");
  $(window).scroll(function () {
    $(this).scrollTop() >= 150
      ? $("header").addClass("fixed")
      : $("header").removeClass("fixed ");
  });

  /************************************ Navbar ************************************/
  $(".menu-btn").on("click", function (e) {
    $(".header-nav").fadeIn(300);
    $(".overlay").fadeIn(300);
    $(".header-nav .nav-content").addClass("active");
    $("body").addClass("overflow");
  });
  $(".overlay,.close-btn").on("click", function (e) {
    $(".header-nav").fadeOut(300);
    $(".overlay").fadeOut(300);
    $(".header-nav .nav-content").removeClass("active");
    $("body").removeClass("overflow");
  });

  if ($(window).width() <= 767) {
    $(".has-children>a").click(function () {
      $(".has-children>a").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".has-children>a").not(this).siblings().slideUp(500);
    });
  }
  /************************************ News Slider ************************************/
  var newsSwiper = new Swiper(".news-slider .swiper", {
    loop: true,
    a11y: {
      enabled: false,
    },
    // autoplay: {
    //   delay: 10000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".news-slider .swiper-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /************************************ scroll ************************************/
  $(".scroll-btn").on("click", function (e) {
    $(document).off("scroll");

    var target = $(this).attr("data-href");
    menu = target;
    $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top - 30,
        },
        500,
        "swing"
      );
  });
  /************************************ Partener Slider ************************************/
  var partenerSwiper = new Swiper(".partener-slider .swiper", {
    loop: true,
    a11y: {
      enabled: false,
    },
    // autoplay: {
    //   delay: 10000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
    },
    pagination: {
      el: ".partener-slider .swiper-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /************************************ Fancybox ************************************/
  Fancybox.bind("[data-fancybox]");
});
