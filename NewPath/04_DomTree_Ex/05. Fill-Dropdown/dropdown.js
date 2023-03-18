function addItem() {debugger
    let inputText = document.getElementById('newItemText');
    let valueText = document.getElementById('newItemValue');
    let menu = document.getElementById('menu');
    let createOption = document.createElement('option');
    createOption.value = valueText.value;
    createOption.textContent = inputText.value;
    menu.appendChild(createOption);
    inputText.value = '';
    valueText.value = '';
}