// console.log('Hello from header.js');

const nav_elems = siteContent.nav;
const nav_keys = keys(nav_elems);
// print(nav_keys);

// print('nav vals:');
const nav_vals = vals(nav_elems);
// print(nav_vals)

// filter over nav-items for string matching 'nav-item-'
const filtered = [];
const filtered2 = [];
nav_keys.forEach((elem, idx) => {
    // https://regexr.com/
    const reg_ex = /nav-item-./g;
    const match = elem.match(reg_ex);
    if (match !== null)
        filtered.push(nav_vals[idx]); // nav-item-.
    else
        filtered2.push(nav_vals[idx]); // all else
});
// _.print(filtered, 'filtered: ');
// _.print(filtered2, 'filtered2: ');

const nav = document.querySelector('header > nav');
filtered.forEach((elem, idx) => {

    const new_elem = document.createElement('a');
    new_elem.textContent = elem;
    new_elem.setAttribute('href', '#');
    
    nav.appendChild(new_elem);
});
// _.print(nav);

const img = document.querySelector('header > img');
img.setAttribute('src', `./${filtered2[0]}`);
// _.print(img);