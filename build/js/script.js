'use strict';

(function () {
  var ESC_KEYCODE = 27;

  var myBtnShow = document.querySelector('.contacts__btn');
  var myPopup = document.querySelector('.popup__overlay');
  var myBtnClose = myPopup.querySelector('.popup__close');

  var yourName = myPopup.querySelector('[name=name]');
  var tel = myPopup.querySelector('[name=tel]');

  var storage = '';

  myBtnShow.addEventListener('click', function (evt) {
    evt.preventDefault();

    myPopup.classList.add('popup__show');

    if (storage) {
      tel.value = storage;
      yourName.focus();

    } else {
      tel.focus();
    }
  });

  myBtnClose.addEventListener('click', function (evt) {
    evt.preventDefault();

    myPopup.classList.remove('popup__show');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      if (myPopup.classList.contains('popup__show')) {
        evt.preventDefault();

        myPopup.classList.remove('popup__show');
      }
    }
  });
})();
