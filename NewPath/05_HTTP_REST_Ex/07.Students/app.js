function attachEvents() {
  const input = Array.from(document.getElementsByClassName('inputs')[0].children);
  const submitBtn = document.querySelector('#submit');
  const resultTable = document.querySelector('tbody');
  submitBtn.addEventListener('click', addStudentToTable);

  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';

  loadStudents();

  function loadStudents() {
  fetch(BASE_URL)
  .then((res) => res.json())
  .then((studentsData) => {
    for (const elements in studentsData) {
      let {firstName, lastName, facultyNumber, grade, _id} = studentsData[elements];
    let tableRow = createElement('tr','',resultTable)
    createElement('td', firstName,tableRow);
    createElement('td', lastName,tableRow);
    createElement('td', facultyNumber,tableRow);
    createElement('td', `${grade.toFixed(2)}`,tableRow);
  };

    })
  }

    async function addStudentToTable() {
    let tableRow = createElement('tr','',resultTable);
    let firstName = input[0].value;
    let lastName = input[1].value;
    let facultyNumber = input[2].value;
    let grade = input[3].value;
    createElement('td', firstName,tableRow);
    createElement('td', lastName,tableRow);
    createElement('td', facultyNumber,tableRow);
    createElement('td', grade,tableRow);
  
    const httpHeaders = {
      method: 'POST',
      body: JSON.stringify({firstName, lastName, facultyNumber, grade})
    }
    try {
      const response = await fetch(BASE_URL, httpHeaders);
      const data = await response.json();
      for (const element of input) {
        element.value = '';
      }
    }catch(err) {
      console.error(err);
    }
    };
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