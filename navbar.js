// mobile menu
const bars = document.querySelector('.bars');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
const navLinks = document.querySelectorAll('.nav-link');

bars.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  console.log('open navbar');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});

navLinks.forEach(() => {
  mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});
