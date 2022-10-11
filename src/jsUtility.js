function createDiv(className, innerText) {
    const newDiv = document.createElement('div');

   if (className) {
    newDiv.classList.add(className);
   }

   if (innerText) {
    newDiv.innerText = innerText;
   }

   return newDiv;

}

export {createDiv as default};