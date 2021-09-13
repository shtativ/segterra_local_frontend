window.addEventListener('load', () => {

    const checkinSlider = new Swiper('.table-swiper', {
        navigation: {
            nextEl: '.table-arrow-next',
            prevEl: '.table-arrow-prev'
        },
        loop: 0,
        noSwiping: 1,
        slidesPerView: 4,
        simulateTouch: 0,
        observer: 1,
        grabCursor: 0,
        observeParents: true,
        breakpoints: {
            630: {
                slidesPerView: 1,
                loop: 1
            },
            820: {
                loop: 0,
                slidesPerView: 2
            },
            1170: {
                loop: 0,
                slidesPerView: 3
            }
        },
    });

});
