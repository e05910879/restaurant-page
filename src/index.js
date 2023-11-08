import menu from './menu.js';
import contact from './contact.js';

const body = document.querySelector('body');
body.setAttribute('style', 'font-style: italic; text-align: center; background-color: lightyellow;');

const content = document.querySelector('div#content');

// Create and append headline
const headline = document.createElement('h1');
headline.textContent = 'La Restaurante';
content.appendChild(headline);

// Create and append image
const image = document.createElement('img');
image.setAttribute('src', '../src/images/restaurant-image');
image.setAttribute('alt', 'People laughing at dinner table.');
image.setAttribute('width', '600px');
image.setAttribute('height', 'auto');
content.appendChild(image);

// Create and append copy
const copy = document.createElement('h2');
copy.textContent = '"Where food and happiness come together."';
content.appendChild(copy);

// Append menu and contact items
content.appendChild(menu());
content.appendChild(contact());