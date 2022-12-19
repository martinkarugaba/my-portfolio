const bars = document.querySelector('.bars');
const mobile_menu = document.querySelector('.mobile-menu');
const close_btn = document.querySelector('.close-btn');
const nav_links = document.querySelectorAll('.nav-link');

bars.addEventListener('click', () => {
  mobile_menu.classList.add('open');
});

close_btn.addEventListener('click', () => {
  mobile_menu.classList.remove('open');
});

nav_links.forEach((nav_link) => {
  mobile_menu.addEventListener('click', () => {
    mobile_menu.classList.remove('open');
  });
});
