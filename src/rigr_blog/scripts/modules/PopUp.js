
/**
 * IE11 add 'classList' field to SVG element*/
if (!("classList" in SVGElement.prototype)) {
    Object.defineProperty(SVGElement.prototype, "classList", {
        get() {
            return {
                contains: className => {
                    return this.className.baseVal.split(" ").indexOf(className) !== -1;
                },
                add: className => {
                    return this.setAttribute('class', this.getAttribute('class') + ' ' + className);
                },
                remove: className => {
                    var removedClass = this.getAttribute('class').replace(new RegExp('(\\s|^)' + className + '(\\s|$)', 'g'), '$2');
                    if (this.classList.contains(className)) {
                        this.setAttribute('class', removedClass);
                    }
                }
            };
        }
    });
}

/**
 * @class
 */
const PopUp = class {
    /**
     * Create a PopUp
     @param  {Element|Element[]} btnShow - Dom Element or Array of Dom Elements to add 'show' class on click.
     @param  {Element} popup - Dom Element used as a popup to get 'show' class.
     @param  {Element|Element[]} [btnClose=popup] - Dom Element or Array of Dom Elements to remove 'show' class on
     click.
     @param  {Boolean} [noScroll=false] - Prevent scroll on window.
     @param  {String} [className='show'] - Class name to be added on click.
     @param  {String} [actionShow=click] - Event to add 'show' class on click.
     @param  {String} [actionHide=click] - Event to remove 'show' class on click.
     @returns {Object} - PopUp instance with button(s) to toggle 'show' class.
     */
    constructor(btnShow, popup, btnClose, noScroll, className, actionShow, actionHide) {
        this.btnShow = btnShow;
        this.popup = popup;
        this.btnClose = btnClose || popup;
        this.noScroll = noScroll || false;
        this.className = className || 'show';
        this.actionShow = actionShow || 'click';
        this.actionHide = actionHide || 'click';
        this.popup.addEventListener('click', (e) => {
            if (e.target.classList.contains('js-popup-link')) {
                this.popup.classList.remove(this.className);
            }
        });
        
        /** Reveal PopUp(add 'show' class), activate Close Button(s) & prevent body scroll*/
        if (!Array.isArray(this.btnShow)) {
            this.btnShow.classList.add('js-popup-link');
            this.btnShow.addEventListener(this.actionShow, () => {
                if (this.btnShow === this.btnClose) {
                    this.popup.classList.toggle(this.className);
                } else {
                    this.addClasslist();
                }
                
                if (this.noScroll) {
                    PopUp.addNoScroll();
                }
            });
        } else {
            this.btnShow.forEach(btn => {
                btn.classList.add('js-popup-link');
                btn.addEventListener(this.actionShow, () => {
                    if (this.btnShow === this.btnClose) {
                        this.popup.classList.toggle(this.className);
                    } else {
                        this.addClasslist();
                    }
                    
                    if (this.noScroll) {
                        PopUp.addNoScroll();
                    }
                });
            })
        }
    };
    
    /**
     * Prevent body scroll
     */
    static addNoScroll() {
        document.body.classList.add('no-scroll');
        window.addEventListener("touchmove", PopUp.preventScrollOnMobile);
    };
    
    static removeNoScroll() {
        document.body.classList.remove('no-scroll');
        window.removeEventListener("touchmove", PopUp.preventScrollOnMobile);
    };
    
    /**
     * Prevent body scroll on IOS(of course) mobile devices
     * @param  {Event} e - Event(click).
     */
    static preventScrollOnMobile(e) {
        e.preventDefault();
    };
    
    /** Hide PopUp(remove 'show' class), deactivate Close Button(s) & return body scroll*/
    hidePopUp() {
        this.popup.classList.remove(this.className);
        this.removeEventListenersToCloseBtn();
        
        if (this.noScroll) {
            PopUp.removeNoScroll();
        }
    };
    
    addClasslist() {
        this.popup.classList.add(this.className);
        this.addEventListenersToCloseBtn();
    }
    
    addEventListenersToCloseBtn() {
        const {btnClose} = this;
        
        if (!Array.isArray(btnClose)) {
            btnClose.addEventListener(this.actionHide, ({target}) => (target === btnClose) ? this.hidePopUp() : null);
        } else {
            btnClose.forEach(btn => {
                btn.addEventListener(this.actionHide, ({target}) => (target === btn) ? this.hidePopUp() : null);
            })
        }
    }
    
    removeEventListenersToCloseBtn() {
        const {btnClose} = this;
        
        if (!Array.isArray(btnClose)) {
            btnClose.removeEventListener(this.actionHide, this.hidePopUp);
        } else {
            btnClose.forEach(btn => {
                btn.removeEventListener(this.actionHide, this.hidePopUp);
            })
        }
    }
};

/** Delete ALL imports before adding to HubSpot*/
export default PopUp;
