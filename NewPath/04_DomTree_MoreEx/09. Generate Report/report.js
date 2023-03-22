function generateReport() {
  const getHeaderOfTable = Array.from(document.querySelector("body > main > table > thead > tr").children);
  const getTableBody = Array.from(document.querySelector("body > main > table > tbody").children);
  const textAreaOutput = document.querySelector('#output');
  let outputObject = [];
  for (const currentEmployee of getTableBody) {
    let index = 0;
    let arrayOfColumn = Array.from(currentEmployee.children);
    let currentObject = {}
    for (const currentRow of getHeaderOfTable) {
        let inputStats = currentRow.querySelector("input");
      if (inputStats.checked) {
          let name = inputStats.name;
          currentObject[name] = arrayOfColumn[index].textContent
        }
        index++;
    }
    outputObject.push(currentObject) 
  }
  let output = JSON.stringify(outputObject);
  textAreaOutput.value = output;
}
