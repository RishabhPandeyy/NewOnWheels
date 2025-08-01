// Night Mode Toggle
const modeToggle = document.querySelector('.night-mode-toggle');
const modeIcon = document.getElementById('modeIcon');
const body = document.body;

// Check for saved user preference
if (localStorage.getItem('night-mode') {
  body.classList.add('night-mode');
  modeIcon.classList.replace('fa-moon', 'fa-sun');
}

// Toggle Night Mode
modeToggle.addEventListener('click', () => {
  body.classList.toggle('night-mode');

  if (body.classList.contains('night-mode')) {
    modeIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('night-mode', 'enabled');
  } else {
    modeIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.removeItem('night-mode');
  }
});