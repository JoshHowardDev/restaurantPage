import createEl from './jsUtility.js';
import fruitLoopsIMG from './images/cereals/fruitLoops.png';
import cheeriosIMG from './images/cereals/cheerios.png';
import captainCrunchIMG from './images/cereals/captainCrunch.png';
import frostedFlakesIMG from './images/cereals/frostedFlakes.png';
import appleJacksIMG from './images/cereals/appleJacks.png';

const menuItems = {
    fruitLoops: ['Fruit Loops', fruitLoopsIMG, `Kellogg’s Froot Loops® is packed with delicious fruity taste, fruity aroma, and bright colors. Made with whole grains and sweetened, Froot Loops® cereal is a fun part of a complete breakfast.`],
    frostedFlakes: ['Frosted Flakes', frostedFlakesIMG, `Help get your family fueled up for a great day with Kellogg’s Frosted Flakes® Cereal. Oven-toasted crunchy corn flakes are perfectly glazed with a sweet frosting. Fortified cereal with 8 essential vitamins and minerals, no cholesterol and 0 grams of fat, they're gr-r-reat!®`],
    captainCrunch: ['Captain Crunch', captainCrunchIMG, `Sweet and golden, with a crunch you’ll love, nothing competes with the original Cap’n Crunch®. Grab a bowl or cup for an easy snack that goes great with couch time, anytime.`],
    appleJacks: ['Apple Jacks', appleJacksIMG, `Start your morning with the sweet delicious taste of apples and cinnamon in every bite. Kellogg’s® Apple Jacks® Cereal is a delicious part of any balanced breakfast.`],
    cheerios: ['Cheerios', cheeriosIMG, `With the delicious flavor of golden honey, General Mills Honey Nut Cheerios Heart Healthy Cereal makes your family’s breakfast hour that much sweeter.`],
}

function createMenuItemsDiv() {
    
    const menuItemsDiv = createEl.div('menuItemsDiv');
    let itemLayoutBool = true;

    Object.values(menuItems).forEach(cerealArray => {
        const photo = new Image();
        photo.alt = cerealArray[0];
        photo.src = cerealArray[1];

        const infoDiv = createEl.div('menuItemInfo');
        const cerealTitle = createEl.span('menuItemTitle', cerealArray[0]);
        const cerealInfo = createEl.span('menuItemVerbiage', cerealArray[2]);
        infoDiv.appendChild(cerealTitle);
        infoDiv.appendChild(cerealInfo);

        const menuItem = createEl.div('menuItem');
        if (itemLayoutBool) {
            menuItem.appendChild(photo);
            menuItem.appendChild(infoDiv);
        } else {
            menuItem.appendChild(infoDiv);
            menuItem.appendChild(photo);
        }
        itemLayoutBool = !itemLayoutBool


        

        menuItemsDiv.appendChild(menuItem);
    });
    return menuItemsDiv;
};

export default function generateMenuContent() {
    const menuContent = createEl.div('menuContent');
    menuContent.appendChild(createMenuItemsDiv());
    return menuContent;
};