function Flipper(elementToFlip) {
    
    elementToFlip.front = () => {
        elementToFlip.classList.remove('rotate180');
    };
    
    elementToFlip.back = () => {
        elementToFlip.classList.add('rotate180');
    };
    
    elementToFlip.addEventListener('click', (e) => {
        if (e.target.classList.contains('flip-back')) {
            elementToFlip.front();
        }
        if (e.target.classList.contains('flip-front')) {
            elementToFlip.back();
        }
    });
}

export default Flipper;