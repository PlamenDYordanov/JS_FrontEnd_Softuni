function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/collections/books";
  const loadBooksBtn = document.getElementById("loadBooks");
  const tbody = document.getElementsByTagName("tbody")[0];
  let titleInput = document.getElementsByName("title")[0];
  let authorInput = document.getElementsByName("author")[0];
  let submitButton = document.querySelector("#form > button");
  let formTitle = document.querySelector("#form > h3");
  let editId = null;

  submitButton.addEventListener("click", submitNewAuthor);
  loadBooksBtn.addEventListener("click", loadBooksHandler);

  async function deleteRowHandler() {
    const id = this.id;
    const httpHeaders = {
      method: "DELETE",
    };
    const response = await fetch(`${BASE_URL}/${id}`, httpHeaders);
    const data = response.json();
    loadBooksHandler();
  }

  async function loadBooksHandler() {
    submitButton.textContent = "Submit";
    formTitle.textContent = "FORM";
    titleInput.value = "";
    authorInput.value = "";
    const response = await fetch(BASE_URL);
    tbody.innerHTML = "";
    const data = await response.json();
    Object.entries(data).forEach((element) => {
      const createRow = createElement("tr", "", tbody);
      const titleContent = createElement("td", element[1]["title"], createRow);
      const authorContent = createElement( "td",element[1]["author"], createRow);
      const actionContent = createElement("td", "", createRow);
      const editBtn = createElement("button", "Edit", actionContent);
      const deleteBtn = createElement("button", "Delete", actionContent);
      deleteBtn.id = element[0];
      deleteBtn.addEventListener("click", deleteRowHandler);
      editBtn.id = element[0];
      editBtn.addEventListener("click", editCurrentBook);
    });
  }
  async function editCurrentBook() {
    editId = this.id;
    const response = await fetch(`${BASE_URL}/${editId}`);
    const data = await response.json();
    const curTitle = data["title"];
    const curAuthor = data["author"];
    titleInput.value = curTitle;
    authorInput.value = curAuthor;
    formTitle.textContent = "Edit FORM";
    submitButton.textContent = "Save";
  }
  async function submitNewAuthor() {
    const title = titleInput.value;
    const author = authorInput.value;
    let url = BASE_URL;
    let obj = { title: title, author: author };
    if (title && author) {
      const httpHeaders = {
        method: "POST",
        body: JSON.stringify(obj),
      };
      if (submitButton.textContent === "Save") {
        url += "/" + editId;
        httpHeaders.method = "PUT";
      }
      const response = await fetch(`${url}`, httpHeaders);
      if (formTitle.textContent === "Edit FORM") {
        formTitle.textContent = "FORM";
      }
      if (submitButton.textContent === "Save") {
        submitButton.textContent = "Submit";
      }

      titleInput.value = "";
      authorInput.value = "";
      loadBooksHandler();
    }
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
