// Инициализируем Swiper
new Swiper(".image-slider", {
  // Cтрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Буллеты, текущее положение, прогрессбар
  pagination: {
    el: ".swiper-pagination",
    // Буллеты
    clickable: true,
    // Динамические буллеты
    dynamicBullets: true,
  },

  // Количество слайдеров для показа
  slidesPerView: 3.5,

  // Отступ между слайдерами
  spaceBetween: 30,

  centeredSlides: true,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1.1,
    },
    483: {
      slidesPerView: 1.14,
    },
    517: {
      slidesPerView: 1.2,
    },
    639: {
      slidesPerView: 1.5,
    },
    783: {
      slidesPerView: 1.8,
    },
    905: {
      slidesPerView: 2.1,
    },
    1101: {
      slidesPerView: 2.5,
    },
    1569: {
      slidesPerView: 3.5,
    },
  },
});
