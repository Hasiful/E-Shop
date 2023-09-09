
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
      slidesToShow: 8,
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

// // magnific popup

// $('.video_popup').magnificPopup({
//   type: 'iframe'
// });