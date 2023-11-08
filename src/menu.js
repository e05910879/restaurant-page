const menu = () => {
    const menu_tab = document.createElement('div');
    menu_tab.setAttribute('id', 'menu_tab');
    menu_tab.textContent = 'Menu';

    return menu_tab;
};

export default menu;