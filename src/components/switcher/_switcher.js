function Toggler() {
    const toggleItem = document.querySelectorAll('.toggler__item');

    for (let i = 0; i < toggleItem.length; i++) {
        for (let j = 0; j < toggleItem.length; j++) {
            toggleItem[i].addEventListener('click', function () {
                toggleItem[j].classList.remove('active');
                this.classList.add('active');
            });
        }
    }
}

Toggler();


let checkbox = document.querySelector('.tumbler__input');
let label = document.querySelector('.tumbler-flex');

checkbox.addEventListener('change', function(event) {
    if(event.target.checked===true){
        document.querySelector('.tumbler-label').textContent="On";
    }
    else{
        document.querySelector('.tumbler-label').textContent="Off";
    }
});
/*
button.addEventListener('click', function() {
    checkbox.checked = !checkbox.checked;
    triggerEvent(checkbox, 'change');
});
*/
function triggerEvent(element, eventName) {
    let event = document.createEvent("HTMLEvents");
    event.initEvent(eventName, false, true);
    element.dispatchEvent(event);
}
