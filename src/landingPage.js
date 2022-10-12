import michaelEatingCereal from './images/michael-eating-cereal.png';
import restaurantInterior1 from './images/restaurantInterior1.png'
import peopleEatingIMG from './images/peopleEating.jpg'
import createEl from './jsUtility.js';

//About Us Info
function createaboutUsDiv() {
    const aboutUsDiv = createEl.div('aboutUsDiv');
    aboutUsDiv.appendChild(createWelcomePhoto());
    aboutUsDiv.appendChild(createAboutUsContainer());
    return aboutUsDiv;
}

function createAboutUsContainer() {
    const greetingSpan = document.createElement('span');
    greetingSpan.innerText = `Welcome to Mike's Cereal Shack!`;
    greetingSpan.classList.add('greetingSpan')

    const bioDiv = createEl.div('bioDiv')
    
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

    const aboutUsDetails = createEl.div('aboutUsDetailsDiv');
    aboutUsDetails.appendChild(bioDiv);

    return aboutUsDetails;
}

function createWelcomePhoto() {
    const photo = document.createElement('img');
    photo.setAttribute('src', michaelEatingCereal);
    photo.setAttribute('alt', 'Michael Eating Cereal');

    const photoDiv = createEl.div('aboutUsPhotoDiv');
    photoDiv.appendChild(photo);
    return photoDiv;
}


//Photo Divider

function createPhotoDivider() {
    const photo = new Image();
    photo.src = peopleEatingIMG;
    photo.alt = 'People Eating';
    const photoDividerDiv = createEl.div('photoDivider');
    photoDividerDiv.appendChild(photo);
    return photoDividerDiv;
}


//Locations Info
function createLocationsInfoDiv() {
    const locationsInfoDiv = createEl.div('locationsInfoDiv');
    locationsInfoDiv.appendChild(createLocationsInfoDetails());
    locationsInfoDiv.appendChild(createLocationsInfoPhoto());
    return locationsInfoDiv;

};

function createLocationsInfoDetails() {
    let locationsInfoSpan1Text = `Whether strolling down the Champs-Élysées in Paris, perusing Fifth Avenue in New York, or enjoying Main Avenue in Scranton, you are sure to find one of our cozy eateries.`
    const locationsInfoSpan1 = createEl.span('locationsInfoSpan1', locationsInfoSpan1Text);
    const locationsInfoTextDiv = createEl.div('locationsInfoTextDiv');
    locationsInfoTextDiv.appendChild(locationsInfoSpan1);
    return locationsInfoTextDiv;
    
}

function createLocationsInfoPhoto() {
    const photo = new Image();
    photo.src = restaurantInterior1;
    photo.alt = 'Restaurant Interior';
    const photoDiv = createEl.div('locationsPhotoDiv')
    photoDiv.appendChild(photo);
    return photoDiv;
};

export default function generateLandingPageContent() {
    const landingPageContent = createEl.div('landingPageContent');
    landingPageContent.appendChild(createaboutUsDiv());
    landingPageContent.appendChild(createPhotoDivider());
    landingPageContent.appendChild(createLocationsInfoDiv());
    return landingPageContent;
};