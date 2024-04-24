function SliderCustomersTestimonial() {
  var swiper4 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      400: {
        slidesPerView: 1,
      },
      800: {
        slidesPerView: 3,
      },
    },
  });
}

SliderCustomersTestimonial();

var swiper2 = new Swiper(".mySwiper", {
  spaceBetween: 20,
  freeMode: false,
  slidesPerView: 1.1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
