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
