const text_content1_h4 = document.querySelector('.main-content > .top-content > .text-content:nth-child(1) > h4');

// .main-content > .top-content > .text-content > h4
text_content1_h4.textContent = siteContent['main-content']['features-h4'];
print(text_content1_h4);

// .main-content > .top-content > .text-content > p
const text_content1_p = document.querySelector('.main-content > .top-content > .text-content:nth-child(1) > p');
text_content1_p.textContent = siteContent['main-content']['features-content'];
print(text_content1_p);

// =======================================
const text_content2_h4 = document.querySelector('.main-content > .top-content > .text-content:nth-child(2) > h4');

text_content2_h4.textContent = siteContent['main-content']['about-h4'];
print(text_content2_h4);