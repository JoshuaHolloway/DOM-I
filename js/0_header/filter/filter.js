// import {_, keys, vals} from '../../~.js';
// _.print('', 'Inside /js/0_header/filter/filter.js');

// Filter all values that have keys with pattern 'nav-item-*'
const filter = (keys, data) => (
  keys.filter(
    elem => elem.match(/nav-item-./g) !== null
  ).map(
    key => data.nav[key]
  )
);

// Filter all values that DO NOT have keys with pattern 'nav-item-*'
const filter2 = (keys, data) => (
  keys.filter(
    elem => elem.match(/nav-item-./g) === null
  ).map(
    key => data.nav[key]
  )
);

export {filter, filter2};