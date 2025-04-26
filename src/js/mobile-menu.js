const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menu-close');

menuToggle.addEventListener('click', () => {
  menu.classList.add('active');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('active');
});
