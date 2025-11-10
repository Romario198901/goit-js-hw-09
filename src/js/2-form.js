const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
form.addEventListener('input', e => {
  if (e.target.name === 'email') {
    formData.email = e.target.value.trim();
  } else {
    formData.message = e.target.value.trim();
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}
form.addEventListener('submit', e => {
  e.preventDefault();
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  if (email.trim() === '' || message.trim() === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData.email = '';
  formData.message = '';
});
