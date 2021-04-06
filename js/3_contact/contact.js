import siteContent from '../index.js';
import {_, keys, vals} from '../~.js';

_.print('contact.js');

const h4 = document.querySelector('.contact > h4');
h4.textContent = siteContent.contact['contact-h4'];
_.print(h4);

const ps = document.querySelectorAll('.contact > p');

ps[0].textContent = siteContent.contact.address;
ps[1].textContent = siteContent.contact.phone;
ps[2].textContent = siteContent.contact.email;