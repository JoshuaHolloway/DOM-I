import siteContent from '../index.js';
import {_, keys, vals} from '../~.js';

const p = document.querySelector('footer > p');
p.textContent = siteContent.footer.copyright;