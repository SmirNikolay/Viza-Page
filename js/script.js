window.addEventListener('DOMContentLoaded', function () {

  document.querySelector('.header__burger-button').addEventListener('click', function () {
    document.querySelector('.header__burger-button').classList.toggle('header__burger-button_active')
    document.querySelector('.burger__menu').classList.toggle('burger__menu_active')
  });

  let videoWidth = document.querySelector('.greetings__video').offsetWidth;
  let screenWidth = window.screen.width;

  if (screenWidth < 1050) {
    let videoStyle = document.querySelector('.greetings__video').style.height = (videoWidth * 0.56) + 'px';
  };
  
  ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.77220806895939,49.220940499999934],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17,
            controls: [],
        },
        {searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        // Своё изображение иконки метки.
        iconImageHref: 'img/icon/map_marker.svg',
        // Размеры метки.
        iconImageSize: [30, 42],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
    });
    myMap.geoObjects
        .add(myPlacemark);
    }
  
  const popupLinks = document.querySelectorAll('.popup__link');
    const body = document.querySelector('body');
    const lockPadding = document.querySelectorAll('.lock__padding');
    let unlock = true;

    const timeout = 600;

    if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', function (e) {
        const popupName = popupLink.getAttribute('href').replace('#', '');
        const curentPopup = document.getElementById(popupName);
        popupOpen(curentPopup);
        e.preventDefault();
        });
    }
    }
    const popupCloseIcon = document.querySelectorAll('.popup-close');
    if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
        popupClose(el.closest('.popup'));
        e.preventDefault();
        });
    };
    };

    function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
        popupClose(popupActive, false);
        } else {
        bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function (e) {
        if (!e.target.closest('.popup__content')) {
            popupClose(e.target.closest('.popup'));
        };
        });
    };
    };
    function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
        bodyUnlock();
        }
    }
    }

    function bodyLock() {
      const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

      if (lockPadding.length > 0) {
          for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index]; 
            el.style.paddingRight = lockPaddingValue;
          }
      }
      body.style.paddingRight = lockPaddingValue;
      body.classList.add('lock');

      unlock = false;
      setTimeout(function () {
        unlock = true;
      }, timeout);
    };

    function bodyUnlock() {
    setTimeout(function () {
        if (lockPadding.length > 0){
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index]; 
            el.style.paddingRight = '0px';
        }
        }  
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
    }

    document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
    });
  
  document.addEventListener('click', function (event) {
    let a = event.target;
    let b = a.getAttribute('src');
    let c = a.className;
    let d = document.querySelector ('.slideshow__img').className;
    let video = document.querySelector ('.excursion__preview');

    if (c === d) {
      video.setAttribute('src', b);  
    };
    
  });
  let position = 0;
const slidesToShow = 4;
const slidesToScroll = 1;
const container = document.querySelector('.slideshow__container');
const track = document.querySelector('.slideshow__track');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const items = document.querySelectorAll('.slideshow__item')
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

btnNext.onclick = btnNextClick;


function btnNextClick () {
  const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  if (position === (-(itemsCount - slidesToShow) * itemWidth)) {
    position = 0;
    setPosition ();
    checkBtns ();
  };

  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition ();
  checkBtns ();
};

btnPrev.onclick = btnPrevClick;

function btnPrevClick () {
  const itemsLeft = Math.abs(position) / itemWidth;
  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition ();
  checkBtns ();
};

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  btnPrev.disabled = position === 0;
};

checkBtns ();
  
});
