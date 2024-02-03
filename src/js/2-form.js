const storagKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

form.addEventListener('input', e => {
  const userName = form.elements.email.value.trim();
  const userMessage = form.elements.message.value.trim();

  const data = {
    name: userName,
    message: userMessage,
  };
  saveToLs(storagKey, data);
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = loadFromLs(storagKey) || {};
  console.log(data);
  form.reset();
  localStorage.removeItem(storagKey);
});

function saveToLs(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLs(key) {
  const data = localStorage.getItem(key);

  try {
    const result = JSON.parse(data);
    return result;
  } catch {
    return data;
  }
}

function restoreData() {
  const data = loadFromLs(storagKey) || {};

  form.elements.email.value = (data.name || '').trim();
  form.elements.message.value = (data.message || '').trim();
}
restoreData();
