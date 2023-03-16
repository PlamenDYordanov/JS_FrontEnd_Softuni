function deleteByEmail() {
  let result = document.getElementById("result");
  let input = document.querySelector("input[name=email]");
  let emails = Array.from(document.querySelectorAll("td:nth-child(even)"));
  let emailValue = input.value;
  let foundElement = emails.find((email) => email.textContent === emailValue);
  if (foundElement) {
    foundElement.parentElement.remove();
    result.textContent = "Delete.";
  } else {
    result.textContent = "Not found.";
  }
}
