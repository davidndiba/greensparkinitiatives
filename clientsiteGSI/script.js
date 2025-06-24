document.addEventListener('DOMContentLoaded', function(){
  const btn  = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  btn.addEventListener('click', () => {
    // toggle the menu
    menu.style.display = menu.style.display === 'flex'
      ? 'none'
      : 'flex';
  });
});
