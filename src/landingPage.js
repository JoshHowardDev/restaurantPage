import michaelEatingCereal from './images/michael-eating-cereal.jpg';

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    header.innerText = `Welcome to Mike's Cereal Shack!`;
    return header;
}

function createBody() {
    const body = document.createElement('div');
    body.classList.add('bodyContainer');
    body.appendChild(createWelcomePhoto());
    body.appendChild(createInfoContainer());
    return body;
}

function createInfoContainer() {
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('infoContainer');
    
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

function generatePage() {
    const pageElement = document.createElement('div');
    pageElement.appendChild(createHeader());
    pageElement.appendChild(createBody());
    return pageElement;
}

export default generatePage;