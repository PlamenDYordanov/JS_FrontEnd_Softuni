function attachEvents() {
  const BASE_URL_POSTS = `http://localhost:3030/jsonstore/blog/posts`;
  const BASE_URL_COMMENTS = `http://localhost:3030/jsonstore/blog/comments`;
  const loadPostsButton = document.querySelector(`#btnLoadPosts`);
  const postsSelection = document.querySelector(`#posts`);
  const viewBtn = document.querySelector(`#btnViewPost`);

  let paragraph = document.querySelector("#post-body");
  let titlePost = document.querySelector("#post-title");
  let postComments = document.querySelector("#post-comments");

  viewBtn.addEventListener("click", loadComments);
  loadPostsButton.addEventListener("click", loadPosts);
  postsSelection.addEventListener("change", selectOption)

  let posts = {};
function selectOption () {
    let selected = postsSelection.querySelector('option:checked');
    console.log(selected);
    titlePost.textContent = selected.textContent;
    paragraph.textContent = posts[selected.value];
    postComments.innerHTML = '';
}
  function loadPosts() {
    fetch(`${BASE_URL_POSTS}`)
      .then((res) => res.json())
      .then((upcomingPosts) => {
        postsSelection.innerHTML = "";
        for (const key in upcomingPosts) {
          const values = upcomingPosts[key];
          let { body, id, title } = values;
          posts[key] = body;
          const option = createElement("option",`${title}`,postsSelection,"","",{ value: `${key}` });
        }

        selectOption();

      });
  }

  function loadComments() {
    const currentValue = postsSelection.value;
    const title = postsSelection[postsSelection.selectedIndex].textContent;
    postComments.innerHTML = '';
    titlePost.textContent = "";
    paragraph.textContent = "";
    fetch(`${BASE_URL_COMMENTS}`)
      .then((res) => res.json())
      .then((commentsData) => {
        titlePost.textContent = title;
        paragraph.textContent = posts[currentValue]
        for (const key in commentsData) {
          const values = commentsData[key];
          let { id, postId, text } = values;
          if (postId === currentValue) {
            const li = createElement("li", text, postComments,id);
          }
        }
      });
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
