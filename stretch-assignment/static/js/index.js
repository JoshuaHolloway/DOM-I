class Timer {

    constructor() {
        this.count = 0;
        this.second_ones = 0;
        this.second_tens = 0;
    }
    add_second() {
        ++this.count;

        this.second_ones = this.count % 10;
        if (this.second_ones === 0) ++this.second_tens % 10;

    }
    get_second_ones() { 
        return this.second_ones;
    }
    get_second_tens() { 
        return this.second_tens;
    }
}

const timer = new Timer();

const delay = 1e3;
setInterval(() => {
    const body = qs('body');
    body.classList.toggle('_red_');

    const second_tens = qs('#secondTens');
    const second_ones = qs('#secondOnes');

    second_ones.textContent = timer.get_second_ones();
    second_tens.textContent = timer.get_second_tens();


    timer.add_second();


}, delay);