const counterValue = document.querySelector('#value');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const onIncrementClick = () => {
  counterValue.textContent = +counterValue.textContent + 1;
};
const onDecrementClick = () => {
  counterValue.textContent -= 1;
};

incrementBtn.addEventListener('click', onIncrementClick);
decrementBtn.addEventListener('click', onDecrementClick);
