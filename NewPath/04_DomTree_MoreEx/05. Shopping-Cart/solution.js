function solve() {
  let addButtons = Array.from(document.getElementsByClassName("product-add"));
  let textArea = document.getElementsByTagName("textarea")[0];
  let getCheckOutBtn = document.querySelector(".checkout");
  let listOfProducts = new Set();
  let totalPrice = 0;

  getCheckOutBtn.addEventListener("click", checkoutBasket);
  for (const currBtn of addButtons) {
    currBtn.addEventListener("click", addProductToTextArea);
  }
  function checkoutBasket() {
    for (const currBtn of addButtons) {
      currBtn.removeEventListener("click", addProductToTextArea);
    }
    let output = `You bought ${Array.from(listOfProducts).join(
      ", "
    )} for ${totalPrice.toFixed(2)}.`;

    textArea.value += `${output}`;
    getCheckOutBtn.removeEventListener("click", checkoutBasket);
  }

  function addProductToTextArea(e) {
    let currentParent = e.currentTarget.parentElement;
    const parentChildren = Array.from(currentParent.children);
    let test = parentChildren.children;
    let name = parentChildren[1].getElementsByClassName("product-title")[0];
    listOfProducts.add(name.innerText);
    let price = Number(parentChildren[3].innerText);
    totalPrice += price;
    let result = `Added ${name.innerText} for ${price.toFixed(2)} to the cart.\n`;
    textArea.value += `${result}`;
  }
}
