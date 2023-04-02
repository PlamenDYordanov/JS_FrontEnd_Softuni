window.addEventListener('load', solve);

function solve() {
    const addBtn = document.getElementById('add-btn');
    const allHitsContainer = document.getElementsByClassName('all-hits-container')[0];
    const savedContainer = document.getElementsByClassName('saved-container')[0];

    addBtn.addEventListener('click', getInformationHandler);
    let inputObj = {
        genre: document.getElementById('genre'),
        name: document.getElementById('name'),
        author: document.getElementById('author'),
        date: document.getElementById('date')
    }
    let startInput = {
        genre: '',
        name: '',
        author: '',
        date: '',
    }
    let copyInput =[];

    for (const key in startInput) {
            startInput[key].placeholder = inputObj[key].placeholder;
          
        }
    
    function getInformationHandler(e) {
        e.preventDefault()
       
        const values = Object.values(inputObj)
        .every((input) => input.value.trim() !== '');
        if(values) {
            for (const key in inputObj) {
                copyInput.push(inputObj[key].value);
            }
            const divContainer = createElement('div', '', allHitsContainer, '',['hits-info']);
            divContainer.innerHTML = '';
       const img = createElement('img', '', divContainer, '', '', {'src': './static/img/img.png'})
       const genreElement = createElement('h2',`Genre: ${inputObj.genre.value}`, divContainer );
       const nameElement = createElement('h2',`Name: ${inputObj.name.value}`, divContainer );
       const authorElement = createElement('h2',`Author: ${inputObj.author.value}`, divContainer );
       const dateElement = createElement('h3',`Date: ${inputObj.date.value}`, divContainer );
       
       const saveBtn = createElement('button', 'Save song', divContainer,'', ['save-btn']);
       const likeBtn = createElement('button', 'Like song', divContainer,'', ['like-btn']);
       const deleteBtn = createElement('button', 'Delete', divContainer,'', ['delete-btn']);
       for (const key in inputObj) {
        inputObj[key].value = startInput[key]
    }
    

        likeBtn.addEventListener('click', likeHandler);
        saveBtn.addEventListener('click', saveHandler);
        deleteBtn.addEventListener('click', deleteHandler);
      }else {
        for (const key in inputObj) {
            inputObj[key].value = startInput[key]
        }
      }
    }
    
    
    function saveHandler() {
        const songRef = this.parentNode;
        const saveBtn = songRef.querySelector('.save-btn');
        const likeBtn = songRef.querySelector('.like-btn');
        savedContainer.appendChild(songRef);
        saveBtn.remove();
        likeBtn.remove();

      }

      function likeHandler(event) {
        event.currentTarget.setAttribute('disabled', '');
        let likeParagraph = document.querySelector('.likes p')
        let text = likeParagraph.textContent;
        let number = text.split(': ');
        let likes = Number(number[1]) + 1;
        let result = [number[0], likes]
        text = result.join(': ')
        likeParagraph.textContent = text;
      }

      function deleteHandler (event) {
            let parent = event.currentTarget.parentElement.parentElement;
            parent.removeChild(event.currentTarget.parentElement);
            
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

   
