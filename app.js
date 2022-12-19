const bars = document.querySelector('.bars');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
const navLinks = document.querySelectorAll('.nav-link');

bars.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});

navLinks.forEach((nav_link) => {
  mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});
