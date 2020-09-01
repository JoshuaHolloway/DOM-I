// Note: I have this set up for seconds, minutes, and hours but am counting in ms.
//       Just change the variable names to match the assignment requirements.

class Timer {

    constructor() {
        this.count = 0;
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
    }
    add_count() {
        ++this.count;
        this.seconds = this.count % 60;
        this.minutes = Math.floor(this.count / 60) % 60;
        this.hours   = Math.floor(this.count / 3600) % 60;
    }

    pad = (num, zeros=2) => {
        // String(<number>).padStart(<places>, '0')
        return String(num.toString()).padStart(zeros, '0')
    };

    get_seconds() { return this.pad(this.seconds); }
    get_minutes() { return this.pad(this.minutes); }
    get_hours()   { return this.pad(this.hours); }
}

const timer = new Timer();

function begin_timer() {
    const delay = 1e-3; // 1ms.
    setInterval(() => {
        const seconds = qs('#seconds');
        const minutes = qs('#minutes');
        const hours = qs('#hours');
    
        seconds.textContent = timer.get_seconds();
        minutes.textContent = timer.get_minutes();
        hours.textContent =   timer.get_hours();
    
        timer.add_count();
    
    }, delay);
}

// * SG1: Implement a start button. The digital timer should not start until the button is pressed.
const button = qs('button');
button.addEventListener('click', () => {
begin_timer();
});