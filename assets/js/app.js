// JavaSccript Clock
const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

function getCurrentBanglaTime12Hour() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const isPM = hours >= 12;

  if (hours > 12) {
    hours -= 12;
  }

  const banglaHours = convertToBanglaDigits(hours);
  const banglaMinutes = convertToBanglaDigits(minutes);
  const banglaSeconds = convertToBanglaDigits(seconds);
  const amPm = isPM ? 'পি. এম' : 'এম';

  const clock_hour = document.querySelector(".clock_hour");
  const clock_minute = document.querySelector(".clock_minute");
  const clock_second = document.querySelector(".clock_seconds");
  const clock_am = document.querySelector(".clock_am");

  clock_hour.innerText = banglaHours;
  clock_minute.innerText = banglaMinutes;
  clock_second.innerText = banglaSeconds;
  clock_am.innerHTML = amPm;
}

function convertToBanglaDigits(number) {
  const digits = number.toString().split('');
  return digits.map(digit => banglaDigits[digit]).join('');
}

setInterval(getCurrentBanglaTime12Hour, 1000);

getCurrentBanglaTime12Hour();


// banner slider

$(function (e) {
  "use strict";
  e(".banner_slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      focusOnSelect: !0,
      dots: false,
      autoplay: true,
      autoplaySpeed: 5e3,
      swipe: true,
      swipeToSlide: true,
      appendArrows: e(".slider_arrow"),
  })
});

// Testimonial slider

$(function (e) {
  "use strict";
  e(".testimonial_slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      focusOnSelect: !0,
      dots: false,
      autoplay: true,
      autoplaySpeed: 5e3,
      swipe: true,
      swipeToSlide: true,
      appendArrows: e(".arrow_testiminal"),
  })
});

// magnific popup

$('.video_popup').magnificPopup({
  type: 'iframe'
});



// object select element
const selectElement = {
  dropdownBtn: document.getElementsByClassName("dropdown_button"),
  subNavItem: document.getElementsByClassName("dropdown_sub"),
}

// element destructure
let {dropdownBtn, subNavItem} = selectElement

;[...dropdownBtn].forEach((innerBtn, index) => {
  let innerNav = subNavItem[index];
  innerBtn.addEventListener("click", function() {
    $(innerNav).slideToggle();
    $(".dropdown_sub").not(innerNav).slideUp();
    $(".dropdown_button").removeClass("active");
    $(innerBtn).toggleClass("active");
  });
});
