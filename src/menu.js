// menu -> menuCategory -> menuItems -> menuItem

function menuItem(item, price) {
    const getItem = () => item;
    const getPrice = () => price;
    const setPrice = (newPrice) => price = newPrice;

    return { getItem, getPrice, setPrice };
};

function menuItems() {
    let items = [];

    const addItem = (item, price) => {
        const itemNames = items.map(eachItem => eachItem.getItem());

        if (itemNames.includes(item)) {
            const itemIndex = itemNames.indexOf(item);
            if (items[itemIndex].getPrice() !== price) {
                items[itemIndex].setPrice(price);
            }
        } else {
            items.push(menuItem(item, price));
        }
    }

    const deleteItem = function(item) {
        const itemNames = items.map(eachItem => eachItem.getItem());
        if (itemNames.includes(item))
            items.splice(itemNames.indexOf(item), 1);
    }

    const getItems = () => items;

    return { addItem, deleteItem, getItems };
}

function menuCategory(category) {
    const getCategory = () => category;
    const items = menuItems();

    const addItem = (item, price) => items.addItem(item, price);
    const deleteItem = (item) => items.deleteItem(item);
    const printItems = () => {
        console.log(`${category}:`);
        const allItems = items.getItems();
        allItems.forEach(printItem => console.log(`${printItem.getItem()}: $${printItem.getPrice()}`));
    };

    const getItems = () => items.getItems();

    return { getCategory, addItem, deleteItem, printItems, getItems };
}

const createMenuDOM = function (menuObject) {
    const menu = document.createElement('div');
    const menuTitle = document.createElement('h2');
    menuTitle.textContent = menuObject.getCategory().charAt(0).toUpperCase() + menuObject.getCategory().slice(1);
    menu.appendChild(menuTitle);

    menuObject.getItems().forEach(item => {
        const itemContainer = document.createElement('div');

        const itemName = document.createElement('div');
        itemName.textContent = item.getItem().charAt(0).toUpperCase() + item.getItem().slice(1);

        const itemPrice = document.createElement('div');
        itemPrice.textContent = `$${item.getPrice()}`;

        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemPrice);

        itemContainer.setAttribute('style', 'display: grid; grid-template-columns: 1fr 1fr;');
        itemName.setAttribute('style', 'justify-self: start;');
        itemPrice.setAttribute('style', 'justify-self: end;')

        menu.appendChild(itemContainer);
    });

    menu.setAttribute('style', 'width: 400px; ');

    return menu;
};

const breakfast = menuCategory('breakfast');
breakfast.addItem('pancakes', 6.99);
breakfast.addItem('waffles', 6.99);
breakfast.addItem('eggs (sunnyside or fried)', 1.99);
breakfast.addItem('ham', 1.99);
breakfast.addItem('bacon', 2.49);
breakfast.addItem('denver omelette', 7.99);
breakfast.addItem('breakfast burrito', 7.49);
breakfast.addItem('hash', 4.99);

const lunch = menuCategory('lunch/dinner');
lunch.addItem('hamburger', 5.99);
lunch.addItem('cheeseburger', 6.49);
lunch.addItem('blt', 4.99);
lunch.addItem('tuna melt', 4.99);
lunch.addItem('ham & cheese', 2.99);
lunch.addItem('bean & cheese burrito', 5.99);
lunch.addItem('cobb salad', 5.99);

const setMenu = () => {
    const menu_container = document.createElement('div');
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Menu';
    menu_container.appendChild(menuTitle);

    menu_container.appendChild(createMenuDOM(breakfast));
    menu_container.appendChild(createMenuDOM(lunch));

    menu_container.setAttribute('style', 'display: grid; grid-template-rows: auto 1fr 1fr; justify-items: center;')

    return menu_container;
};

export default setMenu;