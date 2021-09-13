/** Delete ALL imports before adding to HubSpot*/
import PopUp from './PopUp';

window.addEventListener('load', () => {
    addActiveClass(); //add directly to hubspot module
    mobileMenu();
});

/** Create sidebar for header mobile menu */
function mobileMenu() {
    const overlay = document.querySelector('#overlay');
    const btn = document.querySelector('#btnMenu');
    
    new PopUp(btn, overlay);
}

/** !!!! Only for hubspot blog Create active class to 'blog' link */
function addActiveClass() {
    const blogLink = document.querySelector("a[href*='//blog.insidetracker.com']");
    if (blogLink) blogLink.classList.add('active');
}