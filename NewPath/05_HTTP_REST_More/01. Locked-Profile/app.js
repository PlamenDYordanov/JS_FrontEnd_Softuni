function lockedProfile() {
    const BASE_URL = 'http://localhost:3030/jsonstore/advanced/profiles/';
    const main = document.querySelector('#main');
    let obj = [];
    let index = 1;
    fetch(BASE_URL)
    .then((res)=> res.json())
    .then((userData) => {
      main.innerHTML = '';
        Object.values(userData).forEach((data) => {
          let {_id, username, email, age} = data;
            obj.push(_id);
            const divContainer = createElement('div','',main,'', ['profile']);
            const img = createElement('img','',divContainer, '', ['userIcon'],{src:'./iconProfile2.png'});
            const labelLock = createElement('label','Lock', divContainer);
            const inputLock = createElement('input', '',divContainer,'','',{type:'radio', name:`user${index}Locked`, value:'lock', checked: ''});
            inputLock.addEventListener('click',setLockHandler);
            const labelUnlock = createElement('label','Unlock', divContainer);
            const inputUnlock = createElement('input', '',divContainer,'','',{type:'radio', name:`user${index}Locked`, value:'unlock'});
            inputUnlock.addEventListener('click', setUnlockHandler);
            const br = createElement('br', '', divContainer)
            const hr = createElement('hr', '', divContainer);
            const labelUsername = createElement('label','Username',divContainer);
            let inputUsername = createElement('input',username,divContainer,'','',{type: 'text', name: 'user1Username', value: username});
            inputUsername.setAttribute('disabled','');
            inputUsername.setAttribute('readonly','');
            const hiddenDiv = createElement('div','',divContainer,'user1HiddenFields', '',{style: 'display:none'});
            const emailLabel = createElement('label', 'Email:',hiddenDiv); 
            let inputEmail = createElement('input', '',hiddenDiv, '', '', {type: 'email', name: 'user1Email', value: email});
            inputEmail.setAttribute('disabled', '');
            inputEmail.setAttribute('readonly', '');
            const ageLabel = createElement('label', 'Age:',hiddenDiv); 
            let ageEmail = createElement('input', '',hiddenDiv, '', '', {type: 'email', name: 'user1age', value: age});
            inputEmail.setAttribute('disabled', '');
            inputEmail.setAttribute('readonly', '');
            let showMoreBtn = createElement('button', 'Show more', divContainer,_id)
            showMoreBtn.addEventListener('click', showOrHiddenInfoHandler);
            index ++;
        })
        function setUnlockHandler(e) {
        let container = e.currentTarget.parentElement;
        e.currentTarget.setAttribute('checked','');
        const [lock, unlock] = container.getElementsByTagName('input');
        lock.removeAttribute('checked')
        lock.removeAttribute('value')
        }

      function setLockHandler(e) {
        let container = e.currentTarget.parentElement;
        console.log(e.currentTarget)
          e.currentTarget.setAttribute('checked','');
          e.currentTarget.setAttribute('value','lock');
          const [lock, unlock] = container.getElementsByTagName('input');
          unlock.removeAttribute('checked')
      }
      async function  showOrHiddenInfoHandler(e){
       const content = e.currentTarget;
       const response = await fetch(`${BASE_URL}${content.id}`)
       const data = await response.json();
       let id = data['_id'];
       const index= obj.indexOf(id) + 1;
       const currentUser = document.querySelector(`#main > div:nth-child(${index})`)
       const [lock, unlock] = currentUser.getElementsByTagName('input');
       console.log(unlock)
       if(content.textContent === 'Show more' && unlock.checked){
       let div = currentUser.querySelector('#user1HiddenFields').setAttribute('style', 'display:block');
       let button = currentUser.querySelector('button');
       button.textContent = 'Hide it';
       }else if (content.textContent === 'Hide it' && unlock.checked) {
        let div = currentUser.querySelector('#user1HiddenFields').setAttribute('style', 'display:none');
       let button = currentUser.querySelector('button');
       button.textContent = 'Show more';
       }
      }
    })
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