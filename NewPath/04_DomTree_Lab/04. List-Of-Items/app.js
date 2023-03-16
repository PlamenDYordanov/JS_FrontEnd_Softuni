function addItem() {
let input = document.querySelector('#newItemText');
let newLi = document.createElement('li');
let container = document.querySelector('#items');
newLi.textContent = input.value;
container.appendChild(newLi);
console.log(container)
}