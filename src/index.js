import './style.css'
import './cssReset.css'
import generateLandingPageContent from './landingPage.js';
import generateMenuContent from './menu.js'
import generateContactContent from './contact.js'
import createDiv from './jsUtility.js'
import logoIMG from './images/logo.png'

function createHeader() {
    const header = createDiv('header')
    header.appendChild(headerLogo());
    header.appendChild(headerTabs());
    return header;
}

function headerLogo() {
    const logoImage = new Image();
    logoImage.src = logoIMG;
    const headerLogoDiv = createDiv('headerLogo');
    headerLogoDiv.appendChild(logoImage);
    return headerLogoDiv;
}

function headerTabs() {

    const tabOptions = {
        landingPage: 'Home',
        menu: 'Menu',
        contact: 'Contact Us',
    }

    const headerTabs = createDiv('headerTabs');
    const tabsList = document.createElement('ul');
    tabsList.classList.add('tabsList')

    Object.entries(tabOptions).forEach(tabLink => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(tabLink[1]));
        li.addEventListener('click', generateBodyContent.bind(this, tabLink[0]));
        li.classList.add('tabLink');
        tabsList.appendChild(li);
    });

    headerTabs.appendChild(tabsList);

    return headerTabs;

}

function createBodyContainer() {
    const body = document.createElement('div');
    body.setAttribute('id', 'bodyContainer');
    body.setAttribute('data-generateContent', 'landingPage');
    return body;
}

function generateBodyContent(contentKey) {
    const bodyContainer = document.querySelector('#bodyContainer');
    bodyContainer.innerHTML = '';

    switch(contentKey) {
        case 'landingPage':
            bodyContainer.appendChild(generateLandingPageContent());
            break;
        case 'menu':
            bodyContainer.appendChild(generateMenuContent());
            break;
        case 'contact':
            bodyContainer.appendChild(generateContactContent())
    };
}

function createFooter() {

    const footerLinks = ['Contact Us', 'About Us', 'News & Events', 'Franchising', 'Careers']

    const ul = document.createElement('ul')
    ul.classList.add('footerLinks')
    footerLinks.forEach(footerLink => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(footerLink));
        li.classList.add('footerLink');
        ul.appendChild(li);
    });

    const footer = createDiv('footer');
    footer.appendChild(ul)
    
    return footer;
}

function createOrderButton() {
    const button = createDiv('orderButton')
    button.innerText = 'Order Now'
    return button;
}

(function createPage() {

    const mainPageElements = [createHeader(), createBodyContainer(), createFooter(), createOrderButton()];

    const mainContentContainer = createDiv('mainContentContainer');

    mainPageElements.forEach(element => {
        mainContentContainer.appendChild(element);    
    });

    document.querySelector('body').appendChild(mainContentContainer);

    generateBodyContent('landingPage');

})();

