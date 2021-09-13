function CloseModal() {
    let modal = document.querySelectorAll('.modal');
    let cancelBtn = document.querySelectorAll('.modal__close');
    
    for (let i = 0; i < cancelBtn.length; i++) {
        cancelBtn[i].addEventListener('click', function (e) {
            e.preventDefault();
            modal[i].classList.remove('show');
        });
    }
}

CloseModal();
