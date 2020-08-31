const text_content_h4 = document.querySelector('.main-content > .top-content > .text-content > h4');

// .main-content > .top-content > .text-content > h4
text_content_h4.textContent = siteContent['main-content']['features-h4'];
print(text_content_h4);

// .main-content > .top-content > .text-content > p
const text_content_p = document.querySelector('.main-content > .top-content > .text-content > p');
text_content_p.textContent = siteContent['main-content']['features-content'];
print(text_content_p);
