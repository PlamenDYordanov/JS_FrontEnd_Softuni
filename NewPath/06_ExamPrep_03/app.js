window.addEventListener('load', solve);

function solve() {
    const nextBtn = document.getElementById('next-btn');
    const buyForm = document.querySelector('.container-text form');
    const ticketInfoContainer = document.querySelector('.ticket-info-list')
    const confirmTickets = document.querySelector('.confirm-ticket');
    const main = document.getElementById('main');
    const body = document.getElementById('body');

    nextBtn.addEventListener('click', addToTicketSection);
    let inputDOMSelectors = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    numberOfPeople: document.getElementById('people-count'),
    date: document.getElementById('from-date'),
    days: document.getElementById('days-count'),
   }
   let objValuesFormInput = {
    firstName: '',
    lastName: '',
    numberOfPeople: null,
    date: null,
    days: null
   }

   function addToTicketSection(event) {
    if(event){
        event.preventDefault();
    }

    const checkInput = Object.values(inputDOMSelectors)
    .every((element) => element.value.trim() !== '');
    if(checkInput) {
    let [firstName, lastName, numberOfPeople, date, days] = Object.values(inputDOMSelectors);
    const li = createElement('li','', ticketInfoContainer,'' , ['ticket']);
    const article = createElement('article', '', li);
    createElement('h3', `Name: ${firstName.value} ${lastName.value}`, article);
    createElement('p', `From date: ${date.value}`, article);
    createElement('p', `For ${days.value} days`, article);
    createElement('p', `For ${numberOfPeople.value} people`, article);
    const editBtn =createElement('button', 'Edit', li, '', ['edit-btn']);
    const continueBtn = createElement('button', 'Continue', li, '', ['continue-btn']);

    editBtn.addEventListener('click', editCurrentTicketHandler);
    continueBtn.addEventListener('click', confirmTicketHandler);
        for (const key in inputDOMSelectors) {
          objValuesFormInput[key] = inputDOMSelectors[key].value;
        }
    nextBtn.setAttribute('disabled', '');
    buyForm.reset()
    }
   }

   function editCurrentTicketHandler(e) {
    const parent = e.currentTarget.parentNode;
    parent.remove(); 
    nextBtn.removeAttribute('disabled');
    for (const key in objValuesFormInput) {
      inputDOMSelectors[key].value = objValuesFormInput[key];
    }
   }

   function confirmTicketHandler(e){
    const parent = e.currentTarget.parentNode;
    const li = createElement('li','', confirmTickets,'' , ['ticket-content']);
    const article = createElement('article', '', li);
    createElement('h3', `Name: ${objValuesFormInput.firstName} ${objValuesFormInput.lastName}`, article);
    createElement('p', `From date: ${objValuesFormInput.date}`, article);
    createElement('p', `For ${objValuesFormInput.days} days`, article);
    createElement('p', `For ${objValuesFormInput.numberOfPeople} people`, article);
    const confirmBtn =createElement('button', 'Confirm', li, '', ['confirm-btn']);
    const cancelBtn = createElement('button', 'Cancel', li, '', ['cancel-btn']);

    confirmBtn.addEventListener('click', confirmReservation);
    cancelBtn.addEventListener('click', cancelTicketHandler)
    parent.remove()
   }
   
   function cancelTicketHandler(event){
    event.currentTarget.parentNode.remove()
    nextBtn.removeAttribute('disabled')
   }
   function confirmReservation() {
    main.remove();
    createElement('h1', 'Thank you, have a nice day! ', body, 'thank-you');
    const backBtn = createElement('button', 'Back ', body, 'back-btn');
    backBtn.addEventListener('click', refreshPageHandler);
   }

   function refreshPageHandler() {
    location.reload();
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


    
    
