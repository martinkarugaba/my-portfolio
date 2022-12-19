const bars = document.querySelector('.bars');
const mobile_menu = document.querySelector('.mobile-menu');
const close_btn = document.querySelector('.close-btn');


bars.addEventListener('click', () => {
  mobile_menu.classList.add('open')
})

close_btn.addEventListener('click', () => {
  mobile_menu.classList.remove('open');
});

