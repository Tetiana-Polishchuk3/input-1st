const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menu-close');
const overlay = document.getElementById('overlay');
const menuItems = document.querySelectorAll('.menu-list a');

function openMenu() {
  menu.classList.add('is-open');
  overlay.classList.add('is-open');
  document.body.classList.add('menu-open');
  menuItems[0].focus();
}

function closeMenu() {
  if (menu.classList.contains('is-open')) {
    menu.classList.remove('is-open');
    overlay.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  }
}

menuToggle.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

menuItems.forEach(item => {
  item.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.classList.contains('is-open')) {
    closeMenu();
  }
});
