function Tab() {
    const tab = document.querySelectorAll('.tab-menu__item');
    const content = document.querySelectorAll('.tab-content__item');
    
    for (let i = 0; i < tab.length; i++) {
        tab[i].addEventListener('click', function () {
            for (let j = 0; j < tab.length; j++) {
                tab[j].classList.remove('active');
                this.classList.add('active');
                content[j].classList.remove('active');
                content[i].classList.add('active');
            }
        });
    }
    
}

Tab();