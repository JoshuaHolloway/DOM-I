// import siteContent from '../../index.js';
import {_, keys, vals} from '../../~.js';
_.print('', 'Inside /js/0_header/filter/filter.js');

// Redo concicely:
const filter = (keys) => keys.filter(x => x.match(/nav-item-./g) !== null);

export default filter;