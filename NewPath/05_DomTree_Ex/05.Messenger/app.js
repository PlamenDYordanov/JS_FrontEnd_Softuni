function attachEvents() {
  const sendBtn = document.querySelector("#submit");
  const refreshBtn = document.querySelector("#refresh");
  const nameInput = document.getElementsByName("author")[0];
  const messageInput = document.getElementsByName("content")[0];
  let textArea = document.getElementById("messages");

  const BASE_URL = "http://localhost:3030/jsonstore/messenger";

  sendBtn.addEventListener("click", sendNewMessageHandler);
  refreshBtn.addEventListener("click", refreshAllCommentsHandler);

  function sendNewMessageHandler() {
    let author = nameInput.value;
    let content = messageInput.value;
    const httpHeaders = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ author, content })
    };
    fetch(BASE_URL, httpHeaders)
    .then((res) => res.json())
    .catch((err) => console.error(err));
  }

  async function refreshAllCommentsHandler() {
   const response = await fetch(BASE_URL);
   const data = await response.json();
   const length =  Object.values(data).length;
   Object.values(data).forEach((data, index) => {
    const result =
      index === length - 1? `${data.author}: ${data.content}`:`${data.author}: ${data.content}\n`;
    textArea.textContent += result;
        })
        // for (const key in messageData) {
        //   let currentAuthor = messageData[key]["author"];
        //   let currentContent = messageData[key]["content"];
        //   let result = `${currentAuthor}: ${currentContent}\n`;
        //   textArea.textContent += textAreaContent;
        // }
     
  }
}

attachEvents();
