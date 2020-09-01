class Timer {

    constructor() {
        this.count = 0;
    }
    add_second() {
        this.count++;
    }
    second_ones() { 
        return this.count % 10;
    }
    second_tens() {
        return this.cont % 60;
    }
}

const timer = new Timer();

const delay = 1e3;
setInterval(() => {
    const body = qs('body');
    body.classList.toggle('_red_');

    const second_tens = qs('#secondTens');

    second_tens.textContent = timer.second_ones();
    timer.add_second();


}, delay);