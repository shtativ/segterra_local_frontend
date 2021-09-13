/* Card Flipping Script*/

import './scripts/flipCards';

/* Swiper Slider*/

import './scripts/checkinSlider';


const TABLET = 820;

window.onresize = function () {
    if (window.innerWidth < TABLET) {
        const cards = document.querySelectorAll('.flipper');

        cards.forEach(card => {
            card.classList.remove('rotate180');
        });
    }
}
