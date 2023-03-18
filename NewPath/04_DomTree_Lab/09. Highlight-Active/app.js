function focused() {
  let inputs = Array.from(document.getElementsByTagName("input"));

  for (let input of inputs) {
    input.addEventListener("focus", hover);
    input.addEventListener("blur", unHover);
  }
  function hover(e) {
    let item = e.currentTarget.parentElement;
    item.style.background = "grey";
    item.setAttribute("class", "focused");
  }
  function unHover(e) {
    let item = e.currentTarget.parentElement;
    item.style.background = "white";
    item.removeAttribute("class");
  }
}
