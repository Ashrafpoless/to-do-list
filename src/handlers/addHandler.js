import dom from "../dom.js";
import createLineDiv from "../components/createLineDiv.js"
import data from "../data.js";



const addHandler = (e) => {
    e.preventDefault();
    const value = dom.input.value
    const btnType = dom.add.innerText;
    if (btnType === 'Add') {
        if (!value){
            dom.error.innerText = 'please enter something !';
            dom.error.classList.add('error1');
            setTimeout(() => {
                dom.error.innerText = '';
                dom.error.classList.remove('error1');
            },3000)
            return
        }else{
            dom.error.innerText = '';
            const newItem = {
            id: data.id++,
            text: value
            }

            data.items.push(newItem);

            const item = createLineDiv(newItem);
            dom.second.append(item);

        }
        
    }else{

        const selectedItem = document.querySelector('.selected');
        selectedItem.querySelector('label').innerText = value
        const id = Number(selectedItem.id);
        const itemData = data.items.find((item) => item.id === id);
        itemData.text = value;
        dom.add.innerText = 'add';
        selectedItem.classList.remove('selected');   
    }
    
    dom.input.value ='';
}

export default addHandler;