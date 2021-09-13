/** Deconste ALL imports before adding to HubSpot*/

import PopUp from './PopUp'

// for hubspot
// window.addEventListener('load', function () {
//     showPopup();
//     mobileMenu();
// });
// /** Create sidebar for header mobile menu */
//
// function mobileMenu() {
//     var overlay = document.querySelector('#overlay');
//     var showBtn = document.querySelector('#headerIcon');
//     var btnClose = document.querySelector('#closeIcon');
//     new PopUp(showBtn, overlay, [overlay, btnClose], true);
// }
//
// function showPopup() {
//     var faq = document.querySelector('.faq-popup');
//     var policy = document.querySelector('.policy-popup');
//     var terms = document.querySelector('.terms-popup');
//     var faqBtn = document.querySelectorAll('.faq');
//     var policyBtn = document.querySelectorAll('.policy');
//     var termsBtn = document.querySelectorAll('.terms');
//     var closeBtn = document.querySelectorAll('.close-btn');
//     var closeMobile = document.querySelectorAll('.close-mobile');
//     faqBtn = Array.prototype.slice.call(faqBtn, 0);
//     policyBtn = Array.prototype.slice.call(policyBtn, 0);
//     termsBtn = Array.prototype.slice.call(termsBtn, 0);
//     closeBtn = Array.prototype.slice.call(closeBtn, 0);
//     closeMobile = Array.prototype.slice.call(closeMobile, 0);
//     new PopUp(faqBtn, faq, [].concat(closeBtn, closeMobile), true);
//     new PopUp(policyBtn, policy, [].concat(closeBtn, closeMobile), true);
//     new PopUp(termsBtn, terms, [].concat(closeBtn, closeMobile), true);
// }

"use strict";

window.addEventListener('load', function () {
    showPopup();
    mobileMenu();
});

/** Create sidebar for header mobile menu */
function mobileMenu() {
    var overlay = document.querySelector('#overlay');
    var showBtn = document.querySelector('#headerIcon');
    var btnClose = document.querySelector('#closeIcon');
    
    new PopUp(showBtn, overlay, [overlay, btnClose], true);
}

function showPopup() {
    var faq = document.querySelector('.faq-popup');
    var policy = document.querySelector('.policy-popup');
    var terms = document.querySelector('.terms-popup');

    var faqBtn = document.querySelectorAll('.faq');
    var policyBtn = document.querySelectorAll('.policy');
    var termsBtn = document.querySelectorAll('.terms');

    var closeBtn = document.querySelectorAll('.close-btn');
    var closeMobile = document.querySelectorAll('.close-mobile');

    faqBtn = Array.prototype.slice.call( faqBtn, 0 );
    policyBtn = Array.prototype.slice.call( policyBtn, 0 );
    termsBtn = Array.prototype.slice.call( termsBtn, 0 );

    closeBtn = Array.prototype.slice.call( closeBtn, 0 );
    closeMobile = Array.prototype.slice.call( closeMobile, 0 );
    
    new PopUp(faqBtn, faq, [].concat(closeBtn, closeMobile), true);
    new PopUp(policyBtn, policy, [].concat(closeBtn, closeMobile), true);
    new PopUp(termsBtn, terms, [].concat(closeBtn, closeMobile), true);
}



