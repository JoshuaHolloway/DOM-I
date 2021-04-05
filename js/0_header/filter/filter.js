// import siteContent from '../../index.js';
import {_, keys, vals} from '../../~.js';
_.print('', 'Inside /js/0_header/filter/filter.js');

// Redo concicely:
const filter = (keys, data) => (
  keys.filter(
    elem => elem.match(/nav-item-./g) !== null
  ).map(
    key => data.nav[key]
  )
);

export default filter;