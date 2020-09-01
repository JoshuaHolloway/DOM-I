const text_contents = Array.from(document.querySelectorAll('.main-content > .bottom-content > .text-content'));
print(text_contents);

text_contents.forEach((elem, idx) => {


    // Services
    // Products
    // Vision
    let str;
    switch(idx) {
        case 0: {
            str = 'services';
            break;
        }
        case 1: {
            str = 'product';
            break;
        }
        case 2: {
            str = 'vision';
            break;
        }
        default: {
            print('ERROR - program is not this robust!!!');
        }
    }

    const text_content_h4 = document.querySelector(`.main-content > .bottom-content > .text-content:nth-child(${idx+1}) > h4`);

    // .main-content > .bottom-content > .text-content:nth-child(idx+1) > h4
    text_content_h4.textContent = siteContent['main-content'][`${str}-h4`];
    // print(text_content_h4);

    // .main-content > .bottom-content > .text-content:nth-child(idx+1) > p
    const text_content_p = document.querySelector(`.main-content > .bottom-content > .text-content:nth-child(${idx+1}) > p`);

    text_content_p.textContent = siteContent['main-content'][`${str}-content`];
    // print(text_content1_p);

});

// =======================================