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
// var timer
// btnNextAuto();

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

btnNext.onclick = btnNextClick;

// function btnNextAuto () {
//   timer = setTimeout(btnNextClick, 10000);
// };

function btnNextClick () {
  const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  // clearTimeout(timer);
  if (position === (-(itemsCount - slidesToShow) * itemWidth)) {
    position = 0;
    setPosition ();
    checkBtns ();
    // btnNextAuto ();
  };

  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition ();
  checkBtns ();
  // btnNextAuto ();
};

btnPrev.onclick = btnPrevClick;

function btnPrevClick () {
  const itemsLeft = Math.abs(position) / itemWidth;
  // clearTimeout(timer);
  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition ();
  checkBtns ();
  // btnNextAuto();
};

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  btnPrev.disabled = position === 0;
};

checkBtns ();
