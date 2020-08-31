const cta = document.querySelector('.cta');
const h1 = document.querySelector('.cta > .cta-text > h1');
// print(cta);
// print(h1);

const cta_data = siteContent.cta;
print(cta_data);
const h1_data = cta_data.h1.split(' ');
print(h1_data);

const h1_str = `${h1_data[0]} <br> ${h1_data[1]}<br> ${h1_data[2]}`;
h1.textContent = h1_str;
print(cta);