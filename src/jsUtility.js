const createEl = {

    div(className, innerText) {
        const newDiv = document.createElement('div');
        if (className) {
            newDiv.classList.add(className);
        }
        if (innerText) {
            newDiv.innerText = innerText;
        }
        return newDiv;
    },

    span(className, innerText) {
        const newSpan = document.createElement('span');
        if (className) {
            newSpan.classList.add(className);
        }
        if (innerText) {
            newSpan.innerText = innerText;
        }
        return newSpan;
    },

}

export {createEl as default};