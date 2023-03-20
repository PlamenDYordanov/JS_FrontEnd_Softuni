function validate() {
  //regex => [a-z]+@[a-z]+.[a-z]+
  let emailInput = document.getElementById("email");
  emailInput.addEventListener("change", checkEmail);

  function checkEmail(e) {
    let target = e.currentTarget;
    if (!target.value.match(/[a-z]+@[a-z]+.[a-z]+/)) {
      target.classList.add("error");
    } else {
      target.classList.remove("error");
    }
  }
}
