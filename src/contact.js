import createDiv from './jsUtility.js'

export default function generateContactContent() {
    const contactContent = createDiv('contactContent');
    contactContent.innerHTML = 'Contact Coming Soon';
    return contactContent;
};