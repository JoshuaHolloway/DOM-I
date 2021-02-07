// Integrate a button that can update content on the site with a click of a button.  
// You could build a similar data object with new values to help you test the click event.

const button = document.createElement('button');
button.textContent = "JOSH";
button.classList.add('_button_');

const container = qs('.container');
container.appendChild(button);

button.addEventListener('click', (event) => {
    const body = qs('body');
    body.classList.toggle('_red_');

    const contains_red_class = body.classList.contains('_red_');
    if (contains_red_class)
      button.innerText = 'text content changed';
    else
      button.innerText = 'Josh';
});