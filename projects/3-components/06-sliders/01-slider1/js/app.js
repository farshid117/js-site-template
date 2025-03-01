$('.owl-carousel').owlCarousel({
    loop: true, // boolean
    margin: 10, // Number
    nav: true, // Boolean
    dots: true, // Boolean
    autoplay: true, // Boolean
    autoplayTimeout: 2000, // Number
    center: true, // Boolean
    rtl: true, // Boolean
    smartSpeed: 3000, // Boolean
    items: 5, // Number

    responsive: {
        0: {
            items: 1,
            dots: false,
            nav: false,
        },
        480: {
            items: 2,
            dots: true,
            nav: false,
        },
        600: {
            items: 3,
            margin: 20,
        },
        1000: {
            items: 4
        }
    }

})