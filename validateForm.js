const contactForm = document.querySelector('.contact-form');
const email = document.querySelector('#email');
const errorContainer = document.querySelector('small');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    email.classList.add('error');
    errorContainer.classList.remove('hidden');
  } else {
    contactForm.submit();
  }
});
