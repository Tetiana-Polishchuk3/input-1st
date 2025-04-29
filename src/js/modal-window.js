const contactForm = document.getElementById('contactForm');
const modalBackdrop = document.getElementById('modalBackdrop');

const emailInput = contactForm.elements.email;
const messageInput = contactForm.elements.message;

const emailError = document.querySelector('[data-for="email"]');
const messageError = document.querySelector('[data-for="message"]');

const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

function openModal() {
  modalBackdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
}

function closeModal() {
  modalBackdrop.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
}

document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', e => {
  if (e.target === modalBackdrop) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

function validateField(input, errorElement, isValid, message) {
  if (!isValid) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    input.classList.add('error');
  } else {
    errorElement.textContent = '';
    errorElement.style.display = 'none';
    input.classList.remove('error');
  }
}

function validateForm() {
  let isValid = true;

  const emailValid = emailPattern.test(emailInput.value.trim());
  const messageValid = messageInput.value.trim() !== '';

  validateField(
    emailInput,
    emailError,
    emailValid,
    'Please enter a valid email.'
  );
  validateField(
    messageInput,
    messageError,
    messageValid,
    'Message is required.'
  );

  return emailValid && messageValid;
}

emailInput.addEventListener('input', () => {
  if (emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = '';
    emailError.style.display = 'none';
    emailInput.classList.remove('error');
  }
});

messageInput.addEventListener('input', () => {
  if (messageInput.value.trim() !== '') {
    messageError.textContent = '';
    messageError.style.display = 'none';
    messageInput.classList.remove('error');
  }
});

emailInput.addEventListener('blur', () => {
  const isValid = emailPattern.test(emailInput.value.trim());
  validateField(emailInput, emailError, isValid, 'Please enter a valid email.');
});

messageInput.addEventListener('blur', () => {
  const isValid = messageInput.value.trim() !== '';
  validateField(messageInput, messageError, isValid, 'Message is required.');
});

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  if (validateForm()) {
    contactForm.reset();
    openModal();
  }
});
