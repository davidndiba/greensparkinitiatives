// script.js
// script.js
const toggle = document.querySelector('.nav-toggle');
const menu   = document.querySelector('.nav-menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('nav-menu--open');
});



document.addEventListener('DOMContentLoaded', () => {
  const btn  = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  btn.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
});
