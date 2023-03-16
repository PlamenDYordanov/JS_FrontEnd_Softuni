function addItem() {
    let input = document.getElementById('newItemText');
    let newAnchor = document.createElement('a');
    newAnchor.setAttribute('href', '#');
    let newLi = document.createElement('li');
    let container = document.getElementById('items');
    newLi.textContent = input.value;
    newLi.appendChild(newAnchor);
    newAnchor.addEventListener('click',deleteHandler);
    container.appendChild(newLi);
    newAnchor.textContent = '[Delete]'
    input.value = '';

    function deleteHandler(e) {
       const liItem = e.currentTarget.parentElement;
       liItem.remove();
    } 
}