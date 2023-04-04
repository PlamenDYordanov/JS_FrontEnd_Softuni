
const addBtn = document.getElementById('add-product');
const updateBtn = document.getElementById('update-product')
const loadAllProducts = document.getElementById('load-product'); 
const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';
const tableContent = document.getElementById('tbody');
let currentId = null;

addBtn.addEventListener('click', addProductHandler);
loadAllProducts.addEventListener('click', loadAllProductsHandler);

inputObj = {
    product: document.getElementById('product') ,
    count: document.getElementById('count'),
    price: document.getElementById('price')
}
updateObj = [];

function addProductHandler(event){
if(event) {
    event.preventDefault();
}
const {product, count, price} = inputObj;
let productValue = product.value;
let countValue = count.value;
let priceValue = price.value
const httpHeader = {
    method: 'POST',
    body: JSON.stringify({product: productValue, count: countValue, price: priceValue})
}
fetch(BASE_URL, httpHeader)
.then(() => loadAllProductsHandler())
.catch(err => console.error(err));
clearInput();
}

function clearInput() {
    for (const key in inputObj) {
        console.log(inputObj[key].value = '');
     }
}

function loadAllProductsHandler(event) {
    if(event) {
        event.preventDefault();
    }
    updateBtn.setAttribute('disabled', '');
    addBtn.removeAttribute('disabled');
    tableContent.innerHTML = '';
fetch(BASE_URL)
.then((res) => res.json())
.then((groceriesData) => {
const values = Object.values(groceriesData);
for (const {product, count, price, _id} of values) {
    createTr(product, count, price, _id);
    updateObj[_id] = {product, count, price};
    console.log(updateObj)
}
}).catch(err => console.error(err))
}

function createTr(product, count, price, _id) {
    const baseTr = createElement('tr', '', tableContent, _id);
    const productName = createElement('td', product, baseTr, '', ['name']);
    const productCount = createElement('td', count, baseTr, '', ['count-product']);
    const productPrice = createElement('td', price, baseTr, '', ['product-price']);
    const containerBtn = createElement('td', '', baseTr, _id, ['btn']);
    const updateBtn = createElement('button', 'Update', containerBtn, _id, ['update']);
    const deleteBtn = createElement('button', 'Delete', containerBtn, '', ['delete']);

    deleteBtn.addEventListener('click', deleteHandler);
    updateBtn.addEventListener('click', updateHandler);
}
function updateHandler(event) {
    
    if(event) {
        event.preventDefault();
    }
    const id = event.currentTarget.id;
    currentId = id;
    updateBtn.removeAttribute('disabled');
    addBtn.setAttribute('disabled', '');
        for (const key in updateObj) {
           if(key === id) {
            inputObj.product.value = updateObj[key].product;
            inputObj.count.value = updateObj[key].count;
            inputObj.price.value = updateObj[key].price;
            break;
           }
        }
  
  
    updateBtn.addEventListener('click', changeProductHandler);
}

function changeProductHandler(event) {
    if(event) {
        event.preventDefault();
    }
    const {product, count, price} = inputObj;
let productValue = product.value;
let countValue = count.value;
let priceValue = price.value
const httpHeader = {
    method: 'PATCH',
    body: JSON.stringify({product: productValue, count: countValue, price: priceValue})
}
    fetch(`${BASE_URL}${currentId}`, httpHeader)
.then(() => loadAllProductsHandler())
.catch(err => console.error(err));
clearInput();
}

function deleteHandler(event) {
const id = event.currentTarget.parentNode.id;
const httpHeader = {
    method: 'DELETE'
}
fetch(`${BASE_URL}${id}`, httpHeader)
.then(() => loadAllProductsHandler())
.catch(err => console.error(err));
}

function createElement(type, content, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type);

    if (content && type !== "input") {
      htmlElement.textContent = content;
    }
    if (content && type === "input") { 
      htmlElement.value = content;
    }
    if (id) {
      htmlElement.id = id;
    }
    // [item1, item2, item3]
    if (classes) {
      htmlElement.classList.add(...classes);
    }
    //{src: link, href: link to site}
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }
    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }
    return htmlElement;
  }
