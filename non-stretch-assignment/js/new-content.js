// * [ ] Change the color of the navigation text to be green.
const as = qsAll('nav > a');
as.forEach((elem) => color(elem, 'green'));


// * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.

const new_elem1 = document.createElement('a');
new_elem1.textContent = 'josh-1';
const nav = qs('nav');
nav.prepend(new_elem1);


const new_elem2 = document.createElement('a');
new_elem2.textContent = 'josh-2';
const nav1 = qs('nav');
nav1.append(new_elem2);