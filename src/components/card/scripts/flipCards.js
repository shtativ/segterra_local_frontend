import Flipper from './flipper';

/*
 * 1. Add class 'flipper' to the wrapper
 * 2. Add class 'flip-front' to the flip btn in the front
 * 3. Add class 'flip-back' to the flip btn in the back
 * 4. Done!
 *
 * */

window.addEventListener('load', () => {
    const cardsArr = document.querySelectorAll('.flipper');
    
    cardsArr.forEach(card => {
        const btnDaysArr = card.querySelectorAll('.btn-card--day:not(.btn-card--day--future)');
        
        if (btnDaysArr) {
            btnDaysArr.forEach(btn => {
                btn.addEventListener('click', function () {
                    const selectedItem = card.querySelector('.selected');
                    if (selectedItem) {
                        selectedItem.classList.remove('selected');
                    }
                    this.classList.add('selected');
                })
            });
        }
        
        new Flipper(card);
    });
});