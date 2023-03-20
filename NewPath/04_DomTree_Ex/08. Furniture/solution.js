function solve() {
  let [generateTextArea, buyTextArea] = Array.from(
    document.getElementsByTagName("textarea")
  );
  let [buttonGenerate, buttonBuy] = Array.from(
    document.getElementsByTagName("button")
    );
    
    buttonGenerate.addEventListener("click", addProductToTable);
    buttonBuy.addEventListener("click", buyFurniture);
    const tbody = document.querySelector(".table > tbody");
    
    function addProductToTable() {
      const data = JSON.parse(generateTextArea.value);
      
      for (const { img, name, price, decFactor } of data) {
        const tableRow = createElement("tr", "", tbody);
        const firstColumnTd = createElement("td", "", tableRow);
      const htmlImg = createElement("img", "", firstColumnTd, "", "", {
        src: img,
      });
      const secondColumn = createElement("td", "", tableRow);
      const htmlName = createElement("p", name, secondColumn);
      const thirdColumn = createElement("td", "", tableRow);
      const htmlPrice = createElement("p", price, thirdColumn);
      const fourthColumn = createElement("td", "", tableRow);
      const htmlDecFactor = createElement("p", decFactor, fourthColumn);
      const fifthColumn = createElement("td", "", tableRow);
      const radioButton = createElement("input", "", fifthColumn, "", "", {
        type: "checkbox",
      });
    }
  }
  function buyFurniture() {
    let totalPrice = 0;
    let totalDecoration = 0;
    let productNames = [];
    const getTbodyChild = Array.from(
      document.querySelectorAll(".table > tbody > tr")
    );
    // all checked inputs => Array.from(document.querySelectorAll('tbody tr input:checked'))
    for (let element of getTbodyChild) {
      let inputStatus = element.querySelector("td > input");
      if (inputStatus.checked) {
        let name = element.querySelector("td:nth-child(2)").textContent;
        let price = element.querySelector("td:nth-child(3)").textContent;
        let decorValue = element.querySelector("td:nth-child(4)").textContent;
        totalDecoration += Number(decorValue);
        totalPrice += Number(price);
        productNames.push(name);
      }
    }
    buyTextArea.value = `Bought furniture: ${productNames.join(', ')}
Total price: ${totalPrice.toFixed(2)}
Average decoration factor: ${totalDecoration / productNames.length}`;
  }
  
function createElement(type, content, parentNode, id, classes, attributes) {
  const htmlElement = document.createElement(type);

  if (content && type !== "input") {
    htmlElement.textContent = content;
  }
  if (content && type === "input") {
    htmlElement.value = content;
  }
  if (id) {
    htmlElement.id = id;
  }
  // [item1, item2, item3]
  if (classes) {
    htmlElement.classList.add(...classes);
  }
  //{src: link, href: link to site}
  if (attributes) {
    for (const key in attributes) {
      htmlElement.setAttribute(key, attributes[key]);
    }
  }
  if (parentNode) {
    parentNode.appendChild(htmlElement);
  }
  return htmlElement;
}
}


