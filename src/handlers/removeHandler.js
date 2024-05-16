import data from "../data.js";
import dom from "../dom.js";

const removeHandler = (id) => {
    // from from dom
    const item = document.getElementById(id);
    dom.second.removeChild(item)
    
    // ****** or *******
    // if(item){
    //     item.remove();
    // }


    // from from data
    data.items.filter((item) => item.id !== id);
    
}
export default removeHandler;

