window.addEventListener('load', () => {

    // Change default button text
    $.fn.datepicker.language['en'] = {
        ...$.fn.datepicker.language['en'],
        clear: 'Cancel'
    };

    // Create 'OK' button
    const span = document.createElement('span');
    span.innerText = 'Ok';
    span.className = 'datepicker--button';



    // Type in your element's classname
    $('.calendar').datepicker({
        language: 'en',
        firstDay: 1,
        clearButton: true,
        onShow: (picker) => {
            const body = document.querySelector('body');
            body.style.height = '480px'
            console.log('one');
            // Add 'OK' button to the datepicker
            document.querySelector('.datepicker--buttons').appendChild(span)
            // Add 'click' listener to the 'OK' button
            .addEventListener('click', (e) => {
                // to prevent console error
                e.stopImmediatePropagation();
                // hide the datepicker
                picker.hide();
            });
        },

    });
});
