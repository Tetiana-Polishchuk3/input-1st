// const modalBackdrop = document.getElementById('modalBackdrop');
// const closeModalBtn = document.getElementById('modalCloseBtn');
// const contactForm = document.getElementById('contactForm');

// // === Modal Functions ===
// function openModal() {
//   modalBackdrop.classList.remove('is-hidden');
//   document.body.classList.add('modal-open');
// }

// function closeModal() {
//   modalBackdrop.classList.add('is-hidden');
//   document.body.classList.remove('modal-open');
// }

// closeModalBtn.addEventListener('click', closeModal);

// modalBackdrop.addEventListener('click', e => {
//   if (e.target === modalBackdrop) {
//     closeModal();
//   }
// });

// document.addEventListener('keydown', e => {
//   if (e.key === 'Escape') {
//     closeModal();
//   }
// });

// // === Toast Function ===
// function showToast(message, duration = 3000) {
//   const toast = document.getElementById('toast');
//   toast.textContent = message;
//   toast.classList.remove('hidden');
//   toast.classList.add('show');

//   setTimeout(() => {
//     toast.classList.remove('show');
//     setTimeout(() => toast.classList.add('hidden'), 300);
//   }, duration);
// }

// // === Form Submit ===
// contactForm.addEventListener('submit', async e => {
//   e.preventDefault();

//   const email = contactForm.elements.email.value.trim();
//   const message = contactForm.elements.message.value.trim();

//   const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//   if (!emailPattern.test(email)) {
//     showToast('Please enter a valid email address.');
//     return;
//   }

//   try {
//     const response = await fetch(
//       'https://your-server-endpoint.com/api/requests',
//       {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, message }),
//       }
//     );

//     if (!response.ok) {
//       throw new Error('Server error');
//     }

//     openModal();
//     contactForm.reset();
//   } catch (err) {
//     showToast(
//       'Oops! Something went wrong. Please check your input and try again.'
//     );
//   }
// });
