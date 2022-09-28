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
  
});



  