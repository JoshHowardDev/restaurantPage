import michaelEatingCereal from './images/michael-eating-cereal.png';
import createDiv from './jsUtility.js';

function createInfoContainer() {
    const infoContainer = createDiv('infoContainer');

    const greetingSpan = document.createElement('span');
    greetingSpan.innerText = `Welcome to Mike's Cereal Shack!`;
    greetingSpan.classList.add('greetingSpan')

    const bioDiv = createDiv('bioDiv')
    
    const bioSpan1 = document.createElement('span');
    bioSpan1.classList.add('bioSpan1')
    bioSpan1.innerText = `Founded in October of 2007, our mission has always been clear: to offer every type of cereal you can buy in the store, but in a more social setting.`
        
    const bioSpan2 = document.createElement('span');
    bioSpan2.classList.add('bioSpan2')
    bioSpan2.innerText = `If you are tired of your friends and family avoiding your calls and declining your social invitations, then Mike's Cereal Shack is the place for you.
    
        Come enjoy a bowl at one of our family-style tables. Or sit at the high tops where you can share and bond with other like-minded cereal-lovers.`
        
    const bioSpan3 = document.createElement('span');
    bioSpan3.classList.add('bioSpan3')
    bioSpan3.innerText = `All are welcome at Mike's Cereal Shack!`;

    bioDiv.appendChild(bioSpan1)
    bioDiv.appendChild(bioSpan2)
    bioDiv.appendChild(bioSpan3)

    infoContainer.appendChild(bioDiv);

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

export default function generateLandingPageContent() {
    const landingPageContent = createDiv('landingPageContent');
    landingPageContent.appendChild(createWelcomePhoto());
    landingPageContent.appendChild(createInfoContainer());
    return landingPageContent;
};