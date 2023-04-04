// TODO
function attachEvents() {
    const BASE_URL  = 'http://localhost:3030/jsonstore/tasks/';

  const loadAllBtn = document.getElementById('load-button');
  const addBtn = document.getElementById('add-button');
  let title = document.getElementById('title');
  const ul = document.getElementById('todo-list');

 
  

  loadAllBtn.addEventListener('click', loadAllTasksHandler);
  addBtn.addEventListener('click', addTaskToServer);

  function loadAllTasksHandler(event) {
if(event){
    event.preventDefault();
}
    ul.innerHTML = '';

    fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => {
      const values =  Object.values(data);
     for (const {name, _id} of values) {
        const li = createElement('li','', ul, _id)
        const span = createElement('span', name, li);
        const buttonRemove = createElement('button','Remove',li, _id);
        const buttonEdit = createElement('button','Edit', li, _id);
        
        buttonRemove.addEventListener('click', removeHandler);
        buttonEdit.addEventListener('click', editButtonHandler);
     }
        
    }).catch(err => console.error(err));
  }
  function addTaskToServer(event) {
    if(event){
        event.preventDefault();
    }
    const titleValue = title.value;
    title.value = '';
    let httpHeaders ={
        method: 'POST',
        body: JSON.stringify({name: titleValue})
    }
    fetch(BASE_URL, httpHeaders)
    .then((res) => res.json())
    .catch(err => console.error(err)); 
    loadAllTasksHandler();
  }
  function removeHandler(e){
    const httpHeaders = {
        method: 'DELETE'
    }
    fetch(`${BASE_URL}${e.currentTarget.id}`, httpHeaders)
    .then(() => loadAllTasksHandler())
    .catch((err) => console.log(err))
  }
  //From here
  function editButtonHandler(el) {
    let liParent =el.currentTarget.parentNode;
    let [span, remove, edit] = Array.from(el.currentTarget.parentNode.children)
    let contentFromSpan = span.textContent;
    const input = createElement('input', contentFromSpan, liParent)
    const submitBtn = createElement('button', 'Submit', liParent);
    liParent.prepend(input);
    
    span.remove();
    edit.remove();

    submitBtn.addEventListener('click', submitNewTask);
  }
  function submitNewTask(event) {
    const id = event.currentTarget.parentNode.id;
    const [ input ] = Array.from(event.currentTarget.parentNode.children);

  const httpHeaders = {
        method: 'PATCH',
        body: JSON.stringify({name: input.value})
    } 
    fetch(`${BASE_URL}${id}`,httpHeaders)
    .then(() => loadAllTasksHandler())
    .catch((err) => console.error(err))
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
}

attachEvents();
