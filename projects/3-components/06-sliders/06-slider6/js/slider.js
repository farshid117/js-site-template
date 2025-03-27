const swiper = new Swiper('.swiper-container', {
    effect: "cards",
    speed: 800,
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
    freeMode: false,
    breakpoints: {
        576: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }
})