
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

// // magnific popup

// $('.video_popup').magnificPopup({
//   type: 'iframe'
// });

// countdown js

// countdown

const flashDay = "Sun October 31 2023 11:52:06";
const daysDiv = document.getElementById("days");
const hoursDiv = document.getElementById("hours");
const minuteDiv = document.getElementById("minute");
const secondsDiv = document.getElementById("seconds");

function contDown() {
  const flashCount = new Date(flashDay);
  const currentDay = new Date();

  const totalTime = (flashCount - currentDay) / 1000;
  const totalDays = Math.max(0, Math.floor(totalTime / 86400));
  const totalHours = Math.max(0, Math.floor((totalTime / 3600) % 24));
  const totalMinutes = Math.max(0, Math.floor((totalTime / 60) % 60));
  const totalSeconds = Math.max(0, Math.floor(totalTime % 60));

  daysDiv.innerText = totalDays;
  hoursDiv.innerText = totalHours;
  minuteDiv.innerText = totalMinutes;
  secondsDiv.innerText = totalSeconds;

  if (totalTime <= 0) {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(contDown, 1000);
