function solve() {
  let inputText = document.getElementById("input");
  let output = document.getElementById("output");
  let inputToArray = inputText.value.split(".");
  inputToArray.splice(inputToArray.length - 1);
  while (inputToArray.length > 0) {
    let firstThreeSentence = inputToArray
      .splice(0, 3)
      .map((p) => p.trimStart());
    let createParagraph = document.createElement("p");
    createParagraph.textContent = firstThreeSentence.join(".") + ".";
    output.appendChild(createParagraph);
  }
}
