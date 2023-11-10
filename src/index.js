import setMenu from './menu.js';
import setContact from './contact.js';

const body = document.querySelector('body');
body.setAttribute('style', 'font-style: italic; text-align: center; background-color: lightyellow;');

const content = document.querySelector('div#content');
content.setAttribute('style', 'display: grid; grid-template-rows; auto; justify-content: center;');

// Home: 
function Home() {
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
};
Home();


// Create container for tabs and append to body (not content)
const tab_container = document.createElement('div');
tab_container.setAttribute('id', 'tabs');
// Insert tab_container before content container.
body.insertBefore(tab_container, content);
// Style tab_container
tab_container.setAttribute('style', 'display: flex; justify-content: center; gap: 60px;')


// Add home, menu, and contact tabs
const home_tab = document.createElement('div');
home_tab.setAttribute('id', 'home');
home_tab.textContent = 'Home';
tab_container.appendChild(home_tab);
//Set home tab to be bold by default;
home_tab.setAttribute('style', 'font-weight: bold;');

const menu_tab = document.createElement('div');
menu_tab.setAttribute('id', 'menu');
menu_tab.textContent = 'Menu';
tab_container.appendChild(menu_tab);

const contact_tab = document.createElement('div');
contact_tab.setAttribute('id', 'contact');
contact_tab.textContent = 'Contact';
tab_container.appendChild(contact_tab);

// Create a nodelist for all tabs in tab container
const tabs = document.querySelectorAll('#tabs > *');

// Set cursor to pointer when hovering over links
// mouseenter not working because not going deep into child elements
// Solution: use mouseover instead
tab_container.addEventListener('mouseover', (event) => {
    if (event.target.id === 'home' || event.target.id === 'menu' || event.target.id === 'contact') {
        document.getElementById(event.target.id).style.cursor = 'pointer';
    }
});
tab_container.addEventListener('click', (event) => {
    if (event.target.id === 'home' || event.target.id === 'menu' || event.target.id === 'contact') {
        content.innerHTML = "";
        tabs.forEach((tab) => {
            tab.style.fontWeight = 'normal';
        })
        document.getElementById(event.target.id).style.fontWeight = 'bold';
    }
    switch(event.target.id) {
        case 'home': Home(); break;
        case 'menu': content.appendChild(setMenu()); break;
        case 'contact': content.appendChild(setContact()); break;
    }
});