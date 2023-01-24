const form = document.querySelector('.feedback-form');
const inputEmail = form.querySelector('label > input');
const inputText = form.querySelector('label > textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';
let throttle = require('lodash.throttle');

form.addEventListener(
  'input',
  throttle(() => {
    const inputValue = {
      email: inputEmail.value,
      message: inputText.value,
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(inputValue));
  }, 500)
);

const outputValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

if (localStorage.getItem(LOCALSTORAGE_KEY) === null) {
  inputEmail.value = '';
  inputText.value = '';
} else {
  inputEmail.value = outputValue.email;
  inputText.value = outputValue.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(localStorage.getItem(LOCALSTORAGE_KEY));
  inputEmail.value = '';
  inputText.value = '';
  localStorage.removeItem(LOCALSTORAGE_KEY);
});
