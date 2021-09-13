window.addEventListener('load', () => {
    /*for regular popup BEGIN---*/
    const popupBtn1 = document.getElementById('popupBtn1');
    const popup1= document.getElementById('popup1');
    const closeBtn1 = document.getElementById('close-btn1');
    const closeX1 = document.getElementById('closeX1');
    const screen1 = document.getElementById('screen');

    popupBtn1.onclick = function () {
        openPopup1();
    };
    closeBtn1.onclick = function () {
        closePopup1();
    };
    screen1.onclick = function () {
        closePopup1();
    };
    closeX1.onclick = function () {
        closePopup1();
    };
    function openPopup1() {
        popup1.classList.remove('hide');
        screen1.classList.add('is-visible');
    }
    function closePopup1() {
        popup1.classList.add('hide');
        screen1.classList.remove('is-visible');
    }
    /*---for regular popup END*/

    /*for regular-fill mobile popup BEGIN---*/
    const popupBtn2 = document.getElementById('popupBtn2');
    const popup2= document.getElementById('popup2');
    const closeBtn2 = document.getElementById('close-btn2');
    const closeX2 = document.getElementById('closeX2');
    const screen2 = document.getElementById('screen2');

    popupBtn2.onclick = function () {
        openPopup2();
    };
    closeBtn2.onclick = function () {
        closePopup2();
    };
    screen2.onclick = function () {
        closePopup2();
    };
    closeX2.onclick = function () {
        closePopup2();
    };
    function openPopup2() {
        popup2.classList.remove('hide');
        screen2.classList.add('is-visible');
    }
    function closePopup2() {
        popup2.classList.add('hide');
        screen2.classList.remove('is-visible');
    }
    /*---for regular-fill mobile popup END*/

    /*for large popup BEGIN---*/
    const popupBtn3 = document.getElementById('popupBtn3');
    const popup3= document.getElementById('popup3');
    const closeX3 = document.getElementById('closeX3');
    const screen3 = document.getElementById('screen3');

    popupBtn3.onclick = function () {
        openPopup3();
    };

    screen3.onclick = function () {
        closePopup3();
    };
    closeX3.onclick = function () {
        closePopup3();
    };
    function openPopup3() {
        popup3.classList.remove('hide');
        screen3.classList.add('is-visible');
    }
    function closePopup3() {
        popup3.classList.add('hide');
        screen3.classList.remove('is-visible');
    }
    /*---for large popup END*/

    /*for fullscreen overlay popup BEGIN---*/
    const popupBtn4 = document.getElementById('popupBtn4');
    const popup4= document.getElementById('popup4');
    const closeBtn4 = document.getElementById('close-btn4');
    const closeX4 = document.getElementById('closeX4');
    const screen4 = document.getElementById('screen4');
    const body = document.querySelector('body');
    const bodyHeight = 440;
    const const900 = 900;


    popupBtn4.onclick = function () {
        body.style.height = '900px';
        console.log('takeover');
        openPopup4();
    };
    closeBtn4.onclick = function () {
        body.style.height = '240px';
        closePopup4();
    };
    screen4.onclick = function () {
        body.style.height = '240px';
        closePopup4();
    };
    closeX4.onclick = function () {
        body.style.height = '240px';
        closePopup4();
    };
    function openPopup4() {
        popup4.classList.remove('hide');
        screen4.classList.add('is-visible');
    }
    function closePopup4() {
        popup4.classList.add('hide');
        screen4.classList.remove('is-visible');
    }
    /*---for fullscreen overlay popup END*/
});
