
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
  e(".offer_slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      focusOnSelect: !0,
      dots: false,
      autoplay: !1,
      autoplaySpeed: 5e3,
      swipe: true,
      swipeToSlide: true,
      appendArrows: e(".slideroffer_arrow"),
      responsive: [{
          breakpoint: 1200,
          settings: {
              autoplay: !1,
              slidesToShow: 3,
          }
      },
      {
          breakpoint: 766,
          settings: {
              autoplay: !1,
              slidesToShow: 2,
          }
      },
      {
          breakpoint: 576,
          settings: {
              autoplay: !1,
              slidesToShow: 1,
          }
      }
    ]
  })
});

// // magnific popup

// $('.video_popup').magnificPopup({
//   type: 'iframe'
// });