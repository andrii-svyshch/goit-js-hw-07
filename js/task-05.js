const greetingEl = document.querySelector('#name-output');
const inputEl = document.querySelector('#name-input');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  greetingEl.textContent = event.currentTarget.value || 'незнакомец';
}
