import createDiv from './jsUtility.js'

export default function generateMenuContent() {
    const menuContent = createDiv('menuContent');
    menuContent.innerText = 'Menu Coming Soon';
    return menuContent;
};