const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
  //   dateElementsArr: document.querySelectorAll('[data-value]'),
};

// console.log(refs.dateElementsArr);
class CountdownTimer {
  constructor({ selector, targetDate }) {
    (this.selector = selector), (this.targetDate = targetDate);
    
  }
  start() {
    this.timeDefinition();
    setInterval(() => {
      this.timeDefinition();
    }, 1000);
  }

  timeDefinition() {
    const time = this.targetDate.getTime() - Date.now();
    time > 0 ? this.timeCounter(time) : '';
  }
  timeCounter(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    this.changeTimerContent(days, hours, mins, secs);
  }
  changeTimerContent(days, hours, mins, secs) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 23, 2020'),
});

timer.start()
