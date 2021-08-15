const inputEl = document.querySelector('input[type="number"]');
const boxesEl = document.querySelector('#boxes');
const renderEl = document.querySelector('button[data-action="render"]');
const destroyEl = document.querySelector('button[data-action="destroy"]');

inputEl.addEventListener('input', onInput);
renderEl.addEventListener('click', onRenderClick);
destroyEl.addEventListener('click', onDestroyClick);

let amount = 0;
function onInput(e) {
  amount = e.currentTarget.value;
  return amount;
}

function createBoxes(amount) {
  const boxes = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const boxEl = document.createElement('div');
    boxEl.style.backgroundColor = `rgb(${Math.random() * (255 - 1) + 1},${
      Math.random() * (255 - 1) + 1
    },${Math.random() * (255 - 1) + 1})`;
    boxEl.style.width = `${size}px`;
    boxEl.style.height = `${size}px`;
    boxes.push(boxEl);
    size += 10;
  }
  return boxesEl.append(...boxes);
}

function onRenderClick(e) {
  createBoxes(amount);
}

function onDestroyClick(e) {
  boxesEl.innerHTML = '';
}
