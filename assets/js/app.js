
$(function (e) {
    "use strict";
    e(".banner_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        focusOnSelect: !0,
        dots: false,
        autoplay: !1,
        autoplaySpeed: 5e3,
        swipe: true,
        swipeToSlide: true,
        appendArrows: e(".bannerslider_arrow")
    })
  });
  

// offer
$(function (e) {
  "use strict";
  e(".categories_slider").slick({
      slidesToShow: 8,
      slidesToScroll: 4,
      arrows: true,
      dots: false,
      autoplay: !1,
      autoplaySpeed: 5e3,
      swipe: true,
      swipeToSlide: true,
      appendArrows: e(".category_arrow"),
      responsive: [{
          breakpoint: 1200,
          settings: {
              autoplay: !1,
              slidesToShow: 6,
          }
      },
      {
          breakpoint: 991,
          settings: {
              autoplay: !1,
              slidesToShow: 4,
          }
      },
      {
          breakpoint: 767,
          settings: {
              autoplay: !1,
              slidesToShow: 3,
          }
      },
      {
          breakpoint: 576,
          settings: {
              autoplay: !1,
              slidesToShow: 2,
          }
      }
    ]
  })
});

$(function (e) {
  "use strict";
  e(".top_brand_slider").slick({
      slidesToShow: 7,
      slidesToScroll: 4,
      arrows: true,
      dots: false,
      autoplay: !1,
      margin: 20,
      autoplaySpeed: 5e3,
      swipe: true,
      swipeToSlide: true,
      appendArrows: e(".brand_sliderarrow"),
      responsive: [{
          breakpoint: 1200,
          settings: {
              autoplay: !1,
              slidesToShow: 6,
          }
      },
      {
          breakpoint: 991,
          settings: {
              autoplay: !1,
              slidesToShow: 4,
          }
      },
      {
          breakpoint: 767,
          settings: {
              autoplay: !1,
              slidesToShow: 3,
          }
      },
      {
          breakpoint: 576,
          settings: {
              autoplay: !1,
              slidesToShow: 2,
          }
      }
    ]
  })
});

// slick product details

// package
$(".one_item_product").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".button_item_product",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          vertical: false,
          horizontal: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  
  $(".button_item_product").slick({
    slidesToShow: 5,
    asNavFor: ".one_item_product",
    arrows: false,
    dots: false,
    focusOnSelect: true,
    vertical: false,
    verticalSwiping: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

// // magnific popup

// $('.video_popup').magnificPopup({
//   type: 'iframe'
// });

// dark theme
let darkThemeBtn = document.getElementById("dark_theme")
let body = document.getElementById("body")
let ligt_theme = document.getElementById("ligt_theme")
let dark_theme = document.getElementById("dark_themeicon")

darkThemeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  const isDarkTheme = body.classList.contains("dark-theme");
  localStorage.setItem("dark-theme", isDarkTheme ? "1" : "0");
  setTheme()
});

// set local storage class
function setTheme() {
  const isDarkTheme = localStorage.getItem("dark-theme");
  if (isDarkTheme === "1") {
    document.body.classList.add("dark-theme");
    ligt_theme.style.cssText = "display: none"
    dark_theme.style.cssText = "display: block"
  } else {
    document.body.classList.remove("dark-theme");
    dark_theme.style.cssText = "display: none"
    ligt_theme.style.cssText = "display: block"
  }
}
setTheme();

