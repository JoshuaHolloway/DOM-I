import siteContent from '../index.js';
import {_, qs, qsAll, color} from '../~.js';

// * [ ] Change the color of the navigation text to be green.
const as = qsAll('nav > a');
as.forEach((elem) => color(elem, 'green'));

const nav = qs('nav');
nav.style.background = 'lightgrey';


// * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.

const new_elem1 = document.createElement('a');
new_elem1.textContent = 'josh-1';
new_elem1.style.color = 'white';
nav.prepend(new_elem1);


const new_elem2 = document.createElement('a');
new_elem2.textContent = 'josh-2';
new_elem2.style.color = 'white';
const nav1 = qs('nav');
nav1.append(new_elem2);