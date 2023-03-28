function attachEvents() {
    const btnLoad = document.getElementById('btnLoad');
    const btnCreate = document.getElementById('btnCreate');
    const phonebookContainer = document.getElementById('phonebook');
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook';

    btnLoad.addEventListener('click', loadPhoneNumber);
    btnCreate.addEventListener('click', createPhoneNumber);

    async function createPhoneNumber() {
        const person = document.getElementById('person').value;
        const phone = document.getElementById('phone').value;
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({person,phone})
        }
        try{
        const response = await fetch(BASE_URL, httpHeaders);
       
        loadPhoneNumber();
    }catch(error){
        console.error(error);
    }

    }

   async function loadPhoneNumber() {
    person.value = '';
    phone.value = '';
    try{
        const response = await fetch(BASE_URL);
        const data = await response.json();
        let values =Object.values(data);
        phonebookContainer.innerHTML = '';
        for (const {phone, person, _id} of values) {
            let liContent = `${person}: ${phone}`
            let li = createElement('li', liContent,phonebookContainer);
            let deleteBtn = createElement('button', 'Delete', li);
            deleteBtn.id = _id;
            deleteBtn.addEventListener('click', deleteNumber);
        }
    }catch(error){
        console.error(error);
    }

    }
    async function deleteNumber(){
        const id = this.id;
        const httpHeaders = {
        method: 'DELETE',
       };
        const response = await fetch(`${BASE_URL}/${id}`, httpHeaders);
        const data = await response.json();
        loadPhoneNumber();
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