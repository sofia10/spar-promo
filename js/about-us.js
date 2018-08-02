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