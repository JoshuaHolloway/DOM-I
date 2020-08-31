const josh = document.querySelector('#josh');
console.log(josh);

// Don't use innherHTML!
// x.innerHTML = 'JOSH';

// Create element
const h1 = document.createElement('h1');
h1.textContent = 'JOSH is AWESOME!';
h1.style.fontSize = '3.4rem';
josh.appendChild(h1);