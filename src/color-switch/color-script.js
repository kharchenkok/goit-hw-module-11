const refs = {
  body: document.querySelector('body'),
  buttonWrapper: document.querySelector('.button-wrapper'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

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
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    switchInterval = setInterval(() => {
      refs.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
  } else if (e.target.dataset.action === 'stop') {
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
    clearInterval(switchInterval);
  }
};


refs.buttonWrapper.addEventListener('click', switchBackground);
