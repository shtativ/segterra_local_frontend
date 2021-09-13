/** Delete ALL imports before adding to HubSpot*/
import PopUp from "./PopUp";

window.addEventListener('load', () => {
    postsText();
});


/** Shows hidden text when clicked */
function postsText() {
    const text = document.querySelectorAll('.info-content__item');
    const btnShow = document.querySelectorAll('.info-content__link');
    
    for( let i=0; i <text.length; i++) {
        new PopUp(btnShow[i], text[i], btnShow[i]);
    }
}
