'use strict';

(function () {
  var ESC_KEYCODE = 27;

  var myBody = document.querySelector('body');
  var myBtnShow = myBody.querySelector('.contacts__btn');
  var myPopup = myBody.querySelector('.popup');
  var myOverlay = myPopup.querySelector('.popup__overlay');
  // var myPopupBox = myPopup.querySelector('.popup__wrapper-1');
  var myBtnClose = myPopup.querySelector('.popup__close');

  var yourName = myPopup.querySelector('[name=name]');
  var tel = myPopup.querySelector('[name=tel]');

  var storage = '';

  var myBtnScrollDown = document.querySelector('.promo__scroll-down');

  myBtnShow.addEventListener('click', function (evt) {
    evt.preventDefault();

    myOverlay.classList.add('popup__show');
    myBody.classList.add('popup__no-scroll');

    if (storage) {
      tel.value = storage;
      yourName.focus();

    } else {
      tel.focus();
    }
  });

  myBtnClose.addEventListener('click', function (evt) {
    evt.preventDefault();

    myOverlay.classList.remove('popup__show');
    myBody.classList.remove('popup__no-scroll');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      if (myOverlay.classList.contains('popup__show')) {
        evt.preventDefault();

        myOverlay.classList.remove('popup__show');
        myBody.classList.remove('popup__no-scroll');
      }
    }
  });

  myBtnScrollDown.addEventListener('click', function () {
    $('.advantages').animatescroll();
  });

  $(document).ready(function () {
    $('[type=tel]').mask('+7 (000) 000-00-00');
  });
})();
