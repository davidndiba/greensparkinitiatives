// Toggle menu open/close
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});
