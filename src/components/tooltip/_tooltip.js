const TABLET = 796;

function Tooltip() {
    const tooltipHover = document.querySelectorAll('.tooltip-hover');

    const tooltip = document.querySelectorAll('.tooltip');
    const screen = document.querySelector('.screen');

    for (let i = 0; i < tooltipHover.length; i++) {
        const tooltipIcon = document.querySelectorAll('.tooltip-icon');

        tooltipIcon[i].addEventListener('click', function (e) {
            e.preventDefault();

            /* if (this.parentElement.classList.contains('card-rating')
                && (window.innerWidth <= 820)) {
                tooltip[i].style.display = 'none';
            } else {*/

            if (window.innerWidth < TABLET) {
                tooltip[i].classList.add('show');
                screen.classList.add('is-visible');
            }

            screen.addEventListener('click', function () {
                e.preventDefault();

                    tooltip[i].classList.remove('show');
                    this.classList.remove('is-visible');

            });
        });
    }
}

if (window.innerWidth <= TABLET) {
    Tooltip();
}

window.onresize = function () {
    if (window.innerWidth < TABLET) {
        Tooltip();
    }
}
