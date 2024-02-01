const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

form.addEventListener('input', e => {
  const userName = form.elements.name.value;
  const userMessage = form.elements.message.value;

  console.log(userName, userMessage);
});
