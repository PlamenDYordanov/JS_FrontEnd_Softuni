function extractText() {
  let liElements = Array.from(document.getElementsByTagName("li"));
  let container = document.getElementById("result");
  liElements.forEach(
    (element) => (container.textContent += element.textContent + "\n")
  );
  // for (let element of liElements) {
  //    container.appendChild(element.textContent + '\n');
  // }
}
