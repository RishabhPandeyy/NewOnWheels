// Handle Form Submission
const bookingForm = document.querySelector('.booking-form');

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission

  // Get form data
  const formData = new FormData(bookingForm);
  const data = Object.fromEntries(formData);

  // Display confirmation (you can replace this with an API call)
  alert(`Thank you, ${data.name}! Your booking for ${data.service} on ${data. datetime} has been received.`);

  // Reset the form
  bookingForm.reset();
});