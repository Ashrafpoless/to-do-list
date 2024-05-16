// import dom from "../dom.js";
// import data from "../data.js";

import editHandler from "../handlers/editHandler.js";
import removeHandler from "../handlers/removeHandler.js";
import checkboxHandeler from '../handlers/checkboxHandeler.js';

const createLineDiv = (item) => {
    // div class line
    const lineDiv = document.createElement('div');
    lineDiv.className = 'line';
    lineDiv.id = item.id

    //div class left
    const leftDiv = document.createElement('div');
    leftDiv.className = 'left';

    //input checkbox
    const checBox = document.createElement('input');
    checBox.type = 'checkbox';
    checBox.className = 'checkbox';
    checBox.name = 'checkbox';
    checBox.addEventListener('change', (event) => {
        checkboxHandeler(event)
       

    })

     // label
    const label = document.createElement('label');
    label.setAttribute('for', 'checkbox') ;
    label.innerText = item.text       //dom.input.value

     // append the element to the right div
    leftDiv.append(checBox, label);

    // append  the left div to the line dive
    lineDiv.append(leftDiv);

     //div class right
    const rightDiv = document.createElement('div');
    rightDiv.className = 'right';

     // edit button
    const edit = document.createElement('button');
    edit.innerText = 'Edit';
    edit.className = 'edit';
    edit.type="submit";

    edit.addEventListener('click', () => {
        editHandler(item);
    })

     // edit button
    const deletebtn = document.createElement('button');
    deletebtn.innerText = 'Delete';
    deletebtn.className = 'delete';
    deletebtn.type="submit";

    deletebtn.addEventListener('click', () => {
        removeHandler(item.id)
    })

    // append the element to the left div
    rightDiv.appendChild(edit);
    rightDiv.appendChild(deletebtn);

    // append left and right div ti line div
    lineDiv.append(rightDiv)
    return lineDiv ; 
}

export default createLineDiv;