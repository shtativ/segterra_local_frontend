/** Deconste ALL imports before adding to HubSpot*/

import PopUp from './PopUp'

window.addEventListener('load', () => {
    mobileMenu();
    showPopup()
});

/** Create sidebar for header mobile menu */
function mobileMenu() {
    const overlay = document.querySelector('#overlay');
    const showBtn = document.querySelector('#headerIcon');
    const btnClose = document.querySelector('#closeIcon');
    
    new PopUp(showBtn, overlay, btnClose, true);
}

function showPopup() {
    const faq = document.querySelector('.faq-popup');
    const policy = document.querySelector('.policy-popup');
    const terms = document.querySelector('.terms-popup');
    const faqBtn = document.querySelectorAll('.faq');
    const policyBtn = document.querySelectorAll('.policy');
    const termsBtn = document.querySelectorAll('.terms');
    const closeBtn = document.querySelectorAll('.close-btn');
    const closeMobile = document.querySelectorAll('.close-mobile');
    
    new PopUp([...faqBtn], faq, [...closeMobile, ...closeBtn], true);
    new PopUp([...policyBtn], policy, [...closeMobile, ...closeBtn], true);
    new PopUp([...termsBtn], terms, [...closeMobile, ...closeBtn], true);
}


// for hubspot

//  var IputEffect = function(){
//      var placeholderPosition, appendInputWhenSelect, actions;
//      actions = {
//          activate: function(el) {
//              el.parentNode.parentNode.classList.add('label-up');
//          },
//          deactivate: function(el) {
//              if (el.value === '') el.parentNode.parentNode.classList.remove('label-up');
//          }
//      };
//
//      placeholderPosition = function (el) {
//          if (el.value !== '') actions.activate(el);
//          el.addEventListener('focus', function(){actions.activate(this)});
//          el.addEventListener('blur', function(){actions.deactivate(this)});
//      }
//
//      document.querySelectorAll('.input > .hs-input').forEach(function(el){
//          placeholderPosition(el);
//      })
//  }
//
// window.addEventListener('load', function () {
//     IputEffect();
// });

// "use strict";
//
// window.addEventListener('load', function () {
//     showPopup();
// });
//
// function showPopup() {
//     var faq = document.querySelector('.faq-popup');
//     var policy = document.querySelector('.policy-popup');
//     var terms = document.querySelector('.terms-popup');
//
//     var faqBtn = document.querySelectorAll('.faq');
//     var policyBtn = document.querySelectorAll('.policy');
//     var termsBtn = document.querySelectorAll('.terms');
//
//     var closeBtn = document.querySelectorAll('.close-btn');
//     var closeMobile = document.querySelectorAll('.close-mobile');
//
//     faqBtn = Array.prototype.slice.call( faqBtn, 0 );
//     policyBtn = Array.prototype.slice.call( policyBtn, 0 );
//     termsBtn = Array.prototype.slice.call( termsBtn, 0 );
//
//     closeBtn = Array.prototype.slice.call( closeBtn, 0 );
//     closeMobile = Array.prototype.slice.call( closeMobile, 0 );
//
//
//
//     new PopUp(faqBtn, faq, [].concat(closeBtn, closeMobile), true);
//     new PopUp(policyBtn, policy, [].concat(closeBtn, closeMobile), true);
//     new PopUp(termsBtn, terms, [].concat(closeBtn, closeMobile), true);
// }
//


