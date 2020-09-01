class Timer {

    constructor() {
        this.count = 0;
        this.seconds = 0;
        this.minutes = 0;
    }
    add_count() {
        ++this.count;
        this.seconds = this.count % 60;
        this.minutes = Math.floor(this.count / 60);
    }

    get_seconds() { return this.seconds; }
    get_minutes() { return this.minutes; }
}

const timer = new Timer();

const delay = .1e3;
setInterval(() => {
    const body = qs('body');

    const seconds = qs('#seconds');
    const minutes = qs('#minutes');

    
    const pad = (num, zeros) => {
        // String(<number>).padStart(<places>, '0')
        return String(num.toString()).padStart(zeros, '0')
    };

    seconds.textContent = pad(timer.get_seconds(), 2);
    minutes.textContent = pad(timer.get_minutes(), 2);

    timer.add_count();

}, delay);