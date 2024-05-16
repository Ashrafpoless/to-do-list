
const checkboxHandeler = (event) => {
        if (event.target.matches('.checkbox')) {
             const label = event.target.nextElementSibling;
                if (event.target.checked) {
                label.classList.add('through');
                } else {
                    label.classList.remove('through');
                }
            }
    
}
export default checkboxHandeler;