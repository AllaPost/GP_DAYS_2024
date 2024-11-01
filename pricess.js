// Инициализируем Swiper
new Swiper('.image-slider' ,{
// Cтрелки
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
},
// Буллеты, текущее положение, прогрессбар
pagination: {
    el: '.swiper-pagination',
    // Буллеты
    clickable: true,
    // Динамические буллеты
    dynamicBullets: true, 
},

// Количество слайдеров для показа
slidesPerView: 4.3,

// Отступ между слайдерами
spaceBetween: 30,

// Активный слайд

}); 