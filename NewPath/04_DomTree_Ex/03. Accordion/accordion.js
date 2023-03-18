function toggle() {
  let button = document.getElementsByClassName("button")[0];
  let additionalText = document.getElementById("extra");
  button.textContent === "More" ? show() : hide();

  function show() {
    additionalText.style.display = "block";
    button.textContent = "Less";
  }
  function hide() {
    additionalText.style.display = 'none';
    button.textContent  = 'More';
  }
}
