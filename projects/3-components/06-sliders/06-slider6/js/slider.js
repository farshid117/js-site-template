const swiper = new Swiper('.swiper1', {
    effect: "coverflow", //cards , flip
    speed: 800,
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
    freeMode: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
   

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
const swiper2 = new Swiper('.swiper2', {
    effect: "cards", //cards , flip
    speed: 800,
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
    freeMode: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
   

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
const swiper3 = new Swiper('.swiper3', {
    effect: "flip", //cards , flip
    speed: 800,
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
    freeMode: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
   

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
const swiper4 = new Swiper('.swiper4', {
    speed: 800,
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
    freeMode: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
   

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
