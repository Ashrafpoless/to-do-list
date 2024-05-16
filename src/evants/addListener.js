import dom from "../dom.js"
import addHandler from "../handlers/addHandler.js";

const addListener = () => {
    dom.add.addEventListener('click', (e) =>{
        addHandler(e)
    });
}

export default addListener;