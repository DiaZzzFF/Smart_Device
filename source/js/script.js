'use strict';

(function () {
  var ESC_KEYCODE = 27;

  var myBody = document.querySelector('body');
  var myBtnShow = myBody.querySelector('.contacts__btn');
  var myPopup = myBody.querySelector('.popup');
  var myOverlay = myPopup.querySelector('.popup__overlay');
  var myPopupBox = myPopup.querySelector('.popup__wrapper');
  var myBtnClose = myPopup.querySelector('.popup__close');
  var myBtnScrollDown = myBody.querySelector('.promo__scroll-down');

  var yourName = myPopup.querySelector('[name=name]');
  var tel = myPopup.querySelector('[name=tel]');
  var storage = '';

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var closePopup = function () {
    myOverlay.classList.remove('popup__show');
    myPopupBox.classList.remove('popup__show');
    myBody.classList.remove('popup__no-scroll');

    document.removeEventListener('keydown', onPopupEscPress);
  };

  var openPopup = function () {
    closePopup();

    myOverlay.classList.add('popup__show');
    myPopupBox.classList.add('popup__show');
    myBody.classList.add('popup__no-scroll');

    document.addEventListener('keydown', onPopupEscPress);
  };

  myBtnShow.addEventListener('click', function (evt) {
    evt.preventDefault();

    openPopup();

    if (storage) {
      tel.value = storage;
      yourName.focus();

    } else {
      tel.focus();
    }
  });

  myBtnClose.addEventListener('click', function (evt) {
    evt.preventDefault();

    closePopup();
  });

  myOverlay.addEventListener('click', function (evt) {
    evt.preventDefault();

    closePopup();
  });

  myBtnScrollDown.addEventListener('click', function () {
    $('.advantages').animatescroll();
  });

  $(document).ready(function () {
    $('[type=tel]').mask('+7 (000) 000-00-00');
  });
})();
