class Timer {

    constructor() {
        this.seconds = 0;
        this.minutes = 0;
    }
    get_seconds() { return this.seconds.toString(); }
    get_minutes() { return this.minutes.toString(); }
    add_second(){ ++this.seconds; }
    add_minute(){ ++this.minutes; }
}

const timer = new Timer();

const delay = 1e3;
setInterval(() => {
    const body = qs('body');
    body.classList.toggle('_red_');

    const second_tens = qs('#secondTens');

    second_tens.textContent = timer.get_seconds();
    timer.add_second();


}, delay);