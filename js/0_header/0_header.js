import siteContent from '../index.js';
import {_, keys, vals} from '../~.js';
// _.print(siteContent, 'siteContent: ');

const nav_elems = siteContent.nav;
const nav_keys = keys(nav_elems);
// _.print(nav_keys, 'nav_keys');

// import './filter/filter-design.js';
import {filter, filter2} from './filter/filter.js';
const filtered  = filter( nav_keys, siteContent);
const filtered2 = filter2(nav_keys, siteContent);
// _.print(filtered, 'concise & modular filter: ');

const as = document.querySelectorAll('header > nav > a');
filtered.forEach((elem, idx) => { as[idx].textContent = elem; });
// const nav = document.querySelector('header > nav');
// _.print(nav);

// debugger;
const img = document.querySelector('header > img');
img.setAttribute('src', `./${filtered2[0]}`);
_.print(img);