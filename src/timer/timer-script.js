
    const refs={
        days: document.querySelector('[data-value="days"]'),
        hours: document.querySelector('[data-value="hours"]'),
        mins: document.querySelector('[data-value="mins"]'),
        secs: document.querySelector('[data-value="secs"]'), 
    }


class CountdownTimer{
    constructor({selector,targetDate}){
        this.selector = selector,
        this.targetDate = targetDate
    }

    timerInterval(){
        setInterval(()=>{
            const time = this.targetDate.getTime() - Date.now()
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((time % (1000 * 60)) / 1000);
            refs.days.textContent = String(days).padStart(3,'0')
            refs.hours.textContent = String(hours).padStart(2,'0')
            refs.mins.textContent = String(mins).padStart(2,'0')
            refs.secs.textContent = String(secs).padStart(2,'0')
        },1000)
    }
    
}

let timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Aug 23, 2020'),
  });

  timer.timerInterval()