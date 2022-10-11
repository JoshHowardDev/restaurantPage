import michaelEatingCereal from './images/michael-eating-cereal.jpg';
import createDiv from './jsUtility.js'

function createHeader() {
    const header = createDiv('header')
    header.appendChild(headerLogo());
    header.appendChild(headerTabs());
    return header;
}

function headerLogo() {
    const headerLogo = createDiv('headerLogo', `Mike's Cereal Shack`);
    return headerLogo;
}

function headerTabs() {

    const tabOptions = ['Home', 'Menu', 'Contact Us']

    const headerTabs = createDiv('headerTabs');
    const tabsList = document.createElement('ul');
    tabsList.classList.add('tabsList')

    tabOptions.forEach(tabLink => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(tabLink));
        li.classList.add('tabLink');
        tabsList.appendChild(li);
    });

    headerTabs.appendChild(tabsList);

    return headerTabs;

}

function createBody() {
    const body = createDiv('bodyContainer')
    body.appendChild(createWelcomePhoto());
    body.appendChild(createInfoContainer());
    return body;
}

function createInfoContainer() {
    const infoContainer = createDiv('infoContainer');

    const greetingSpan = document.createElement('span');
    greetingSpan.innerText = `Welcome to Mike's Cereal Shack!`;
    greetingSpan.classList.add('greetingSpan')
    
    const bioSpan = document.createElement('span');
    bioSpan.innerText = `
        Founded in October of 2007, Mike's Cereal Shack has been offering every brand of cereal you can imagine. Our mission has always been clear: to offer every 
        type of cereal you can buy in the store, but in a more social setting. If you are tired of your friends and family avoiding your calls and declining your 
        social invitations, then Mike's Cereal Shack is the place for you. Come enjoy a bowl at one of our family-style tables. Or sit at the high tops where you  
        can share and bond with other like-minded cereal-lovers. All are welcome at Mike's Cereal Shack!
    `;

    infoContainer.appendChild(bioSpan);

    return infoContainer;
}

function createWelcomePhoto() {
    const photo = document.createElement('img');
    photo.setAttribute('src', michaelEatingCereal);
    photo.setAttribute('alt', 'Michael Eating Cereal');

    const photoDiv = document.createElement('div');
    photoDiv.appendChild(photo);
    return photoDiv;
}

export default function generatePage() {
    const pageElement = document.createElement('div');
    pageElement.classList.add('mainContentContainer');
    pageElement.appendChild(createHeader());
    pageElement.appendChild(createBody());
    return pageElement;
};