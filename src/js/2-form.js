const form = document.querySelector('.feedback-form');
const messageInput = document.querySelector('textarea');
const emailInput = document.querySelector('input');

const storageKey = 'feedback-form-state';

function saveFormData() {
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  const jsonData = JSON.stringify(formData);
  localStorage.setItem(storageKey, jsonData);
}

function loadFormData() {
  const savedData = JSON.parse(localStorage.getItem(storageKey));
  if (savedData) {
    emailInput.value = savedData.email || '';
    messageInput.value = savedData.message || '';
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();
  if (emailValue && messageValue) {
    const formData = {
      email: emailValue,
      message: messageValue,
    };
    console.log(formData);
    localStorage.removeItem(storageKey);
    emailInput.value = '';
    messageInput.value = '';
  } else {
    console.log('Fill in the forms');
  }
}

form.addEventListener('input', saveFormData);
loadFormData();
form.addEventListener('submit', handleSubmit);
