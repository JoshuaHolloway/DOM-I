const delay = 1e3;
setInterval(() => {
    const body = qs('body');
    body.classList.toggle('_red_');
}, delay);