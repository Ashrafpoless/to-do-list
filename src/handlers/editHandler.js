import dom from "../dom.js";


const editHandler = (item) => {
    dom.add.innerText = 'edit';
    dom.input.value = item.text;
    document.getElementById(item.id).classList.add('selected')
};

export default editHandler;