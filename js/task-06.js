const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  inputEl.removeAttribute('class');
  if (event.currentTarget.value.length === 0) {
  } else {
    event.currentTarget.value.length === +inputEl.dataset.length
      ? inputEl.classList.add('valid')
      : inputEl.classList.add('invalid');
  }
}
