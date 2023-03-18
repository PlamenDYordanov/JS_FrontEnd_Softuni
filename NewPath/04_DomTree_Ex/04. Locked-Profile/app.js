function lockedProfile() {
  let getAllProfiles = Array.from(document.getElementsByClassName("profile"));
  for (let profile of getAllProfiles) {
    let button = profile.getElementsByTagName("button")[0];
    button.addEventListener("click", clickHandler);
  }
  function clickHandler(e) {
    let currentButton = e.currentTarget;
    let takeParent = currentButton.parentElement;
    let getHiddenInfo = takeParent.getElementsByTagName("div")[0];
    const radioButton = takeParent.querySelector(":nth-child(3)");
    if (!radioButton.checked) {
      if (currentButton.textContent === "Show more") {
        getHiddenInfo.style.display = "block";
        currentButton.textContent = "Hide it";
      } else {
        getHiddenInfo.style.display = "none";
        currentButton.textContent = "Show more";
      }
    }
  }
}
