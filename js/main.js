console.log('Hello from JOSH');

const nav = document.querySelector('nav');
console.log(nav);

const as = Array.from(nav.children);
console.log(as);

const a_tag = (a, href, text) => {
    a.textContent = text;
    a.setAttribute('href', href);
};

as.forEach((a) => {
    a_tag(a, 'josh-href', 'josh-text');
});