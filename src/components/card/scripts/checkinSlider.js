window.addEventListener('load', () => {
    
    const checkinSlider = new Swiper('.swiper-card', {
        navigation: {
            nextEl: '.swiper-button--next',
            prevEl: '.swiper-button--prev'
        },
        slidesPerView: 'auto',
        slidesOffsetAfter: -10,
        slidesOffsetBefore: 62,
        spaceBetween: 0,
        simulateTouch: true,
        grabCursor: true,
        observer: true,
        observeParents: true,
        breakpoints: {
            630: {
                slidesOffsetAfter: 16,
                slidesOffsetBefore: -8,
            },
            820: {
                slidesOffsetAfter: 16,
                slidesOffsetBefore: -8,
            },
            1170: {
                slidesOffsetAfter: 40,
                slidesOffsetBefore: 40,
            }
        },
        
    });
});