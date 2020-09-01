const text_content1_h4 = document.querySelector('.main-content > .bottom-content > .text-content:nth-child(1) > h4');

// .main-content > .bottom-content > .text-content:nth-child(1) > h4
text_content1_h4.textContent = siteContent['main-content']['services-h4'];
// print(text_content1_h4);

// .main-content > .bottom-content > .text-content:nth-child(1) > p
const text_content1_p = document.querySelector('.main-content > .bottom-content > .text-content:nth-child(1) > p');

text_content1_p.textContent = siteContent['main-content']['services-content'];
// print(text_content1_p);

// =======================================

// .main-content > .bottom--content > .text-content:nth-child(2) > h4
const text_content2_h4 = document.querySelector('.main-content > .bottom-content > .text-content:nth-child(2) > h4');
text_content2_h4.textContent = siteContent['main-content']['about-h4'];
print(text_content2_h4);

// .main-content > .bottom--content > .text-content:nth-child(2) > p
const text_content2_p = document.querySelector('.main-content > .bottom-content > .text-content:nth-child(2) > p');
text_content2_p.textContent = siteContent['main-content']['about-content'];
print(text_content2_p);



