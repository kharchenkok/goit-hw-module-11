const refs = {
  body: document.querySelector('body'),
  buttonWrapper: document.querySelector('.button-wrapper'),
  buttons: document.querySelectorAll('[data-action]'),
};

console.log(refs.buttons);
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let switchInterval;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const switchBackground = function (e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  if (e.target.dataset.action === 'start') {
    switchInterval = setInterval(() => {
      refs.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
  } else if (e.target.dataset.action === 'stop') {
    clearInterval(switchInterval);
  }
  changeBtnDisable(e.target.dataset.action);
};

function changeBtnDisable(value) {
  return refs.buttons.forEach(button =>
    button.dataset.action === value
      ? (button.disabled = true)
      : (button.disabled = false),
  );
}

refs.buttonWrapper.addEventListener('click', switchBackground);
