window.addEventListener("load", solve);

function solve() {
  let publishBtn = document.getElementById('form-btn');
  let previewUL = document.getElementById('preview-list');
  let main = document.getElementById('main');
  let sideWrapper = {
    firstName: '',
    lastName: '',
    age: '',
    storyTitle: '',
    genre: '',
    storyText: ''
  }
  publishBtn.addEventListener('click', createStoryHandler);
  let inputFields = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    storyTitle: document.getElementById('story-title'),
    genre: document.getElementById('genre'),
    storyText: document.getElementById('story')
  }
  function createStoryHandler() {
  let checkInputs  = Object.values(inputFields)
  .every((input) => input.value.trim() !== '');
  publishBtn.setAttribute('disabled', '');
  if (checkInputs) {
    const li = createElement('li','',previewUL,'',['story-info'])
    const article = createElement('article', '', li);
    createElement('h4',`Name: ${inputFields.firstName.value} ${inputFields.lastName.value}`,article);
    createElement('p',`Age: ${inputFields.age.value}`, article);
    createElement('p',`Title: ${inputFields.storyTitle.value}`, article);
    createElement('p',`Genre: ${inputFields.genre.value}`, article);
    createElement('p',inputFields.storyText.value, article);
    const saveBtn = createElement('button', 'Save Story', li,'',['save-btn']);
    const editBtn = createElement('button', 'Edit Story', li,'',['edit-btn']);
    const deleteBtn = createElement('button', 'Delete Story', li,'',['delete-btn']);

    saveBtn.addEventListener('click', saveStoryHandler);
    editBtn.addEventListener('click', editStoryHandler);
    deleteBtn.addEventListener('click', deleteStoryHandler);
    for (const key in inputFields) {
      
        sideWrapper[key] = inputFields[key].value;
        
      }
      clearInput(inputFields);

    }
  }
  function saveStoryHandler() {
    main.innerHTML = '';
    createElement('h1', 'Your scary story is saved!', main);

  }
  function editStoryHandler() {
    previewUL.innerHTML = '';
    createElement('h3', 'Preview', previewUL);
    publishBtn.removeAttribute('disabled');
    for (const key in sideWrapper) {
        inputFields[key].value = sideWrapper[key];
    }
    clearInput(sideWrapper);
  }
  function deleteStoryHandler() {
    previewUL.innerHTML = '';
    createElement('h3', 'Preview', previewUL);
    publishBtn.removeAttribute('disabled');
  }

  function clearInput(obj) {
    Object.values(obj).forEach((element) => element.value = '');
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
  