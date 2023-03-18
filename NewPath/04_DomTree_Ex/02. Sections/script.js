function create(words) {
  let container = document.getElementById("content");

  for (let i = 0; i < words.length; i++) {
    let createdDiv = document.createElement("div");
    let createdParagraph = document.createElement("p");
    createdParagraph.textContent = `${words[i]}`;
    createdDiv.appendChild(createdParagraph);
    createdParagraph.style.display = "none";
    container.appendChild(createdDiv);
    createdDiv.addEventListener("click", (event) => {
      let currentDiv = event.currentTarget;
      let currentParagraph = currentDiv.getElementsByTagName("p")[0];
      currentParagraph.style.display = "block";
    });

   //  function clickHandler(e) {
   //    let currentDiv = e.currentTarget;
   //    let currentParagraph = currentDiv.getElementsByTagName("p")[0];
   //    currentParagraph.style.display = "block";
   //  }
  }
}
