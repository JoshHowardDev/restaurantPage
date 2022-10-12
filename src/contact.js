import createEl from './jsUtility.js'

function createContactInfoDiv() {

    const contactInfo = createEl.div('contactInfo');
    contactInfo.appendChild(createEl.span('contactInfoTitle', 'Contact Info'));
    contactInfo.appendChild(createEl.span('contactInfoSubtitle', `Mike's Cereal Shack Corporate HQ`));
    contactInfo.appendChild(createEl.span('contactInfoAddress', `1138 Capouse Ave
        Scranton, PA 18509`));
    contactInfo.appendChild(createEl.span('contactInfoPhone', '570-507-9294'));

    const mediaRequests = createEl.div('mediaRequests');
    mediaRequests.appendChild(createEl.span('mediaRequestsTitle', 'Media Requests'));
    mediaRequests.appendChild(createEl.span('mediaRequestsSubtitle', 'For all media inquiriees, images, quotes, comments and interview requests, please contact:'));
    mediaRequests.appendChild(createEl.span('michaelScottTitle', `Mike's Cereal Shack HQ`));
    mediaRequests.appendChild(createEl.span('michaelScottInfo', `Michael Scott | littekidlover@greatscott.com
    O: 570-507-9295`));


    const contactInfoDiv = createEl.div('contactInfoDiv');
    contactInfoDiv.appendChild(contactInfo);
    contactInfoDiv.appendChild(mediaRequests);
    return contactInfoDiv;

}

export default function generateContactContent() {
    const contactContent = createEl.div('contactInfoContainer');
    contactContent.appendChild(createContactInfoDiv());
    return contactContent;
};