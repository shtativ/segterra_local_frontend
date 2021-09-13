/** Delete ALL imports before adding to HubSpot*/
import PopUp from './PopUp';

window.addEventListener('load', () => {
    CloseModal();
});

function CloseModal() {
    
    const modal = document.querySelector('.modal');
    const cancelBtn = document.querySelector('.modal__close');
    
    new PopUp(cancelBtn, modal, cancelBtn);
}
