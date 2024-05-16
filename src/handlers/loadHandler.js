import data from "../data.js";
import createLineDiv from "../components/createLineDiv.js";
import dom from "../dom.js";

const loadHandler = () =>{
    data.items.forEach((item) =>{
        const lineDiv = createLineDiv(item);

        // append linediv to second
        dom.second.append(lineDiv);
    })

};

export default loadHandler;