// * [ ] Change the color of the navigation text to be green.
const as = qsAll('nav > a');
as.forEach((elem) => elem.style.color = 'green');


// * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.

const new_elem = document.createElement('h2');
new_elem.textContent = 'Hello from new-content.js!';
const container = qs('.container');
container.prepend(new_elem);

const new_elem2 = document.createElement('h1');
new_elem2.textContent = 'Hello from new-content.js!';
const nav = qs('.nav');
container.appendChild(new_elem2);



// * [ ] Check your work by looking at the [original html](original.html) in the browser
