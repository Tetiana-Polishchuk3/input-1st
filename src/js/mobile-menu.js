const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menu-close');
const overlay = document.getElementById('overlay');
const firstMenuItem = document.querySelector('.menu-list a');

function openMenu() {
  menu.classList.add('active');
  overlay.classList.add('active');
  document.body.classList.add('menu-open');
  firstMenuItem.focus();
}

function closeMenu() {
  menu.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('menu-open');
}

menuToggle.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.classList.contains('active')) {
    closeMenu();
  }
});
