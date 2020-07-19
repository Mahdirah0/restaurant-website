let burger = document.querySelector('.burger');
let cross = document.querySelector('.cross');
let section = document.querySelector('.slide-show');
let listLi = document.querySelectorAll('.nav-links-section li a');

burger.addEventListener('click', () => {
  if (section.classList.contains('section-show')) {
    section.classList.remove('section-show');
  } else {
    section.classList.add('section-show');
  }
  cross.addEventListener('click', () => {
    section.classList.remove('section-show');
  });
});

listLi.forEach((item) => {
  item.addEventListener('click', () => {
    section.classList.remove('section-show');
  });
});

const scrollAppear = () => {
  let menuText = document.querySelectorAll('.menu-desc-text');
  let menuImage = document.querySelectorAll('.image-menu');
  let screenPosition = window.innerHeight / 2;

  console.log(menuImage);

  menuText.forEach((item) => {
    let menuTextPos = item.getBoundingClientRect().top - 500;
    if (menuTextPos < screenPosition) {
      item.classList.add('menu-desc-text-appear');
    }
  });

  menuImage.forEach((item) => {
    let menuImagePos = item.getBoundingClientRect().top - 500;
    console.log(menuImagePos);
    console.log(screenPosition, 'screen');
    if (menuImagePos < screenPosition) {
      item.classList.add('menu-image-rotate');
    }
    // else {
    //   item.classList.remove('menu-image-rotate');
    // }
  });
};

window.addEventListener('scroll', scrollAppear);
