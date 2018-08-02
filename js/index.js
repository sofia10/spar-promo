var swiper = new Swiper('.s1', {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.s1 .swiper-pagination',
        clickable: true,
    },
});
var swiper = new Swiper('.s2', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.s2 .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        991: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    }
});
var swiper = new Swiper('.s3', {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: '.s3 .swiper-pagination',
        clickable: true,
    },
});