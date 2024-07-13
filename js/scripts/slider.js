var swiper2 = new Swiper(".mySwiper", {
  spaceBetween: 10,
  freeMode: false,
  slidesPerView: 1.1,
  speed: 800,

  autoplay: {
    delay: 5000, // tempo em milissegundos entre os slides
  },
  loop: true,
  navigation: true,
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
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
