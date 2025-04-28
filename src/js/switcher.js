const switcher = document.getElementById('toggle');
const body = document.body;

function setTheme(theme) {
  if (theme === 'dark') {
    body.classList.remove('light');
    body.classList.add('dark');
    switcher.checked = true;
  } else {
    body.classList.remove('dark');
    body.classList.add('light');
    switcher.checked = false;
  }
}

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  setTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
}

switcher.addEventListener('change', () => {
  if (switcher.checked) {
    setTheme('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    setTheme('light');
    localStorage.setItem('theme', 'light');
  }
});
