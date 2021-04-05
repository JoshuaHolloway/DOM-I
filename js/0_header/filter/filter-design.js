import siteContent from '../../index.js';
import {_, keys, vals} from '../../~.js';
_.print('', 'Inside /js/0_header/filter/filter-design.js');

const nav_elems = siteContent.nav;
const nav_keys = keys(nav_elems);
// _.print(nav_keys, 'nav_keys');

const nav_vals = vals(nav_elems);
// _.print(nav_vals, 'nav_vals');

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
_.print(filtered, 'filtered: ');
// _.print(filtered2, 'filtered2: ');

// Redo with .filter:
const filt_keys = nav_keys.filter((x) => {
  const reg_ex = /nav-item-./g;
  const match = x.match(reg_ex);
  // _.print(match, `match for ${x}: `);  
  return match !== null; // nav-item-*
});
const filt_vals = filt_keys.map((key) => siteContent.nav[key]);
_.print(filt_vals, 'filt_vals: ');

// Redo concicely:
const filter = (keys) => keys.filter(x => x.match(/nav-item-./g) !== null);
const filt = filter(nav_keys);
_.print(filt, '(concisely) filt: ');
