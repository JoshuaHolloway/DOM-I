console.log('Hello from JOSH-2');

const nav_elems = siteContent.nav;

const nav_keys = keys(nav_elems);
print(nav_keys);

print('nav vals:');
const nav_vals = vals(nav_elems);
print(nav_vals)

// filter over nav-items for string matching 'nav-item-'
const filtered = [];
nav_keys.forEach((elem, idx) => {
    // https://regexr.com/
    const reg_ex = /nav-item-./g;
    const match = elem.match(reg_ex);
    if (match !== null)
        filtered.push(nav_vals[idx]);
});
print(filtered);

const nav = document.querySelector('nav');
console.log(nav);


filtered.forEach((elem, idx) => {

    const new_elem = document.createElement('a');
    new_elem.textContent = elem;
    new_elem.setAttribute('href', '#');
    
    nav.appendChild(new_elem);
});
console.log(nav);