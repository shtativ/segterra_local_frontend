'use strict';

// from InsideTracker
function getNumber(element, parameter) {
    var elementParam = element.getAttribute(parameter);
    if (isInt(elementParam)) {
        return parseInt(elementParam, 10);
    } else {
        return parseFloat(elementParam).toFixed(1);
    }
}

function isInt(value) {
    if (isNaN(value)) {
        return false;
    }
    var x = parseFloat(value);
    return (x | 0) === x;
}

function pauseEvent(event) {
    if (event.stopPropagation) {
        event.stopPropagation();
    }
    
    if (event.preventDefault) {
        event.preventDefault();
    }
    
    event.cancelBubble = true;
    event.returnValue = false;
    return false;
}

var now = function () {
    return new Date().getTime();
};

function debounce(funzione, wait, immediate) {
    var timestamp;
    var timeout;
    var context;
    var result;
    var args;
    
    if (null === wait) {
        wait = 100;
    }
    
    function later() {
        var last = now() - timestamp;
        
        if (last < wait && last > 0) {
            timeout = setTimeout(later, wait - last);
        } else {
            timeout = null;
            if (!immediate) {
                result = funzione.apply(context, args);
                if (!timeout) {
                    context = args = null;
                }
            }
        }
    };
    
    return function debounced() {
        context = this;
        args = arguments;
        timestamp = now();
        var callNow = immediate && !timeout;
        if (!timeout) {
            timeout = setTimeout(later, wait);
        }
        if (callNow) {
            result = funzione.apply(context, args);
            context = args = null;
        }
        
        return result;
    };
}

function setInitialPosition(min, max, initValue) {
    var initial = isNaN(initValue) ? 0 : initValue;
    var range = max - min;
    var percent = Math.round((initial - min) * 100 / range);
    return percent;
}

function handlePosition(offset, width) {
    var min = 0;
    var max = 100;
    var ratio = Math.min(Math.max(offset / width, min), 1);
    var range = max - min;
    var percent = Math.round(ratio * range + min);
    return percent;
}

function handlePositionSteps(offset, width, min, max, stepWidth) {
    var ratio = Math.min(Math.max(offset / width, 0), 1);
    var range = max - min;
    var currentStep = Math.round(ratio * range / stepWidth);
    var percent = currentStep * stepWidth / range * 100;
    return percent;
}

function eventHandler(obj, fn, event, flag, update) {
    if (flag === undefined) {
        flag = true;
    }
    
    var pageX = event.pageX;
    if (!pageX) {
        pageX = event.touches[0].pageX
    }
    
    fn(event);
    obj.isMoving = flag;
    obj.animationFrame = window.requestAnimationFrame(update);
    obj.offset = pageX - obj.dimensions.left;
}

function handleValue(min, max, percentage) {
    var maxRange = max - min;
    var domVal = percentage * maxRange / 100 + min;
    
    if (isInt(domVal)) {
        return Math.round(domVal);
    } else {
        return parseFloat(domVal.toFixed(1));
    }
    
}

function setValueInDom(element, value, timing) {
    //added polyfill for the 11 ie
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function (s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {
                }
                return i > -1;
            };
    }
    (function () {
        if (!Element.prototype.closest) {
            
            Element.prototype.closest = function (css) {
                var node = this;
                
                while (node) {
                    if (node.matches(css)) {
                        return node;
                    } else {
                        node = node.parentElement;
                    }
                }
                return null;
            };
        }
    })();
    if (timing === 1) {
        element.textContent = getTime(value);
    } else {
        element.textContent = value;
    }
    if (value === 0) {
        element.closest('.ranger').classList.add('ranger--clear');
    } else {
        element.closest('.ranger').classList.remove('ranger--clear');
    }
}

function getTime(mins) {
    //ie prerogative
    Math.trunc = Math.trunc || function (x) {
        if (isNaN(x)) {
            return NaN;
        }
        if (x > 0) {
            return Math.floor(x);
        }
        return Math.ceil(x);
    };
    var hours = Math.trunc(mins / 60);
    var minutes = mins % 60;
    return (hours === 0 ? '00' : hours) + ':' + (minutes === 0 ? '00' : minutes);
};

function setAttributeInDom(el, attr, value) {
    return el.setAttribute(attr, value);
}

function createSlider(ruler) {
    
    if (ruler.length <= 0 || ruler.length < ruler.length || ruler.length < ruler.length) {
        return;
    }
    
    var inputElement = ruler.querySelector('.ranger__input');
    var trackElement = ruler.querySelector('.ranger-track');
    var distanceElement = ruler.querySelector('.ranger-track__distance');
    var valueElement = ruler.querySelector('.ranger-indicator__value');
    var indicatorEL = ruler.querySelector('.ranger-indicator');
    
    var setDebouncedValue = debounce(setValueInDom, 10);
    var setDebouncedAttr = debounce(setAttributeInDom, 10);
    
    var ranger = {
        isMoving: false,
        min: getNumber(inputElement, 'data-min'),
        max: getNumber(inputElement, 'data-max'),
        value: getNumber(inputElement, 'value'),
        steps: getNumber(inputElement, 'data-step'),
        time: getNumber(inputElement, 'data-time'),
        offset: 0,
        currentValue: 0,
        dimensions: trackElement.getBoundingClientRect()
    };
    
    var init = function () {
        var initialPosition = setInitialPosition(ranger.min, ranger.max, ranger.value) + '%';
        
        distanceElement.style.width = initialPosition;
        
        if (indicatorEL !== null) {
            
            setValueInDom(valueElement, ranger.value, ranger.time);
        }
        
        window.addEventListener('resize', function () {
            ranger.dimensions = trackElement.getBoundingClientRect();
        });
    };
    
    init();
    
    var onMouseDown = function (e) {
        eventHandler(ranger, pauseEvent, e, true, update);
        
        if (!isNaN(ranger.steps)) {
            ranger.currentPosition = handlePositionSteps(ranger.offset, ranger.dimensions.width, ranger.min, ranger.max, ranger.steps);
        } else {
            ranger.currentPosition = handlePosition(ranger.offset, ranger.dimensions.width);
        }
        
        ranger.currentValue = handleValue(ranger.min, ranger.max, ranger.currentPosition);
        
    };
    
    var onMouseMove = function (e) {
        if (ranger.isMoving) {
            eventHandler(ranger, pauseEvent, e, true, update);
            
            if (!isNaN(ranger.steps)) {
                ranger.currentPosition = handlePositionSteps(ranger.offset, ranger.dimensions.width, ranger.min, ranger.max, ranger.steps);
            } else {
                ranger.currentPosition = handlePosition(ranger.offset, ranger.dimensions.width);
            }
            
            ranger.currentValue = handleValue(ranger.min, ranger.max, ranger.currentPosition);
        }
    };
    
    var onMouseUp = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (ranger.isMoving) {
            window.cancelAnimationFrame(ranger.animationFrame);
            ranger.isMoving = false;
            update(null, false);
        }
    };
    
    var onTouchstart = function (e) {
        eventHandler(ranger, pauseEvent, e, true, update);
        
        if (!isNaN(ranger.steps)) {
            ranger.currentPosition = handlePositionSteps(ranger.offset, ranger.dimensions.width, ranger.min, ranger.max, ranger.steps);
        } else {
            ranger.currentPosition = handlePosition(ranger.offset, ranger.dimensions.width);
        }
        
        ranger.currentValue = handleValue(ranger.min, ranger.max, ranger.currentPosition);
    };
    
    var onTouchmove = function (e) {
        if (ranger.isMoving) {
            eventHandler(ranger, pauseEvent, e, true, update);
            
            if (!isNaN(ranger.steps)) {
                ranger.currentPosition = handlePositionSteps(ranger.offset, ranger.dimensions.width, ranger.min, ranger.max, ranger.steps);
            } else {
                ranger.currentPosition = handlePosition(ranger.offset, ranger.dimensions.width);
            }
            
            ranger.currentValue = handleValue(ranger.min, ranger.max, ranger.currentPosition);
        }
    };
    
    var onTouchend = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (ranger.isMoving) {
            window.cancelAnimationFrame(ranger.animationFrame);
            ranger.isMoving = false;
            update(null, false);
        }
    };
    
    var update = function (timeStamp) {
        var loop = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
        
        if (loop) {
            ranger.animationFrame = window.requestAnimationFrame(update);
        }
        
        ruler.classList.toggle('is-moving', ranger.isMoving);
        distanceElement.style.width = ranger.currentPosition + '%';
        setDebouncedAttr(inputElement, 'value', ranger.currentValue);
        
        if (indicatorEL !== null) {
            setDebouncedValue(valueElement, ranger.currentValue, ranger.time);
        }
    };
    
    ruler.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', debounce(onMouseMove, 10));
    window.addEventListener('mouseup', onMouseUp);
    
    ruler.addEventListener('touchstart', onTouchstart);
    ruler.addEventListener('touchmove', onTouchmove);
    window.addEventListener('touchend', onTouchend);
}

function rulerCreate(rulers) {
    this.create = function (rulers) {
        var sliderList = Array.prototype.slice.call(rulers);
        
        sliderList.forEach(function (ruler) {
            createSlider(ruler);
        });
        
    }
}

document.addEventListener('DOMContentLoaded', () => {
    var rulers = document.getElementsByClassName('ranger');
    var ruler = new rulerCreate();
    ruler.create(rulers)
});