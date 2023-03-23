function solve() {
    const convertToSelector = document.querySelector('#selectMenuTo');
    const createBinary = document.createElement('option')
    createBinary.setAttribute('value', 'binary');
    createBinary.textContent = 'Binary';
    const createHexadecimal = document.createElement('option');
    createHexadecimal.setAttribute('value', 'hexadecimal');
    createHexadecimal.textContent = 'Hexadecimal';
    convertToSelector.appendChild(createBinary);
    convertToSelector.appendChild(createHexadecimal);
   const button = document.querySelector('button');
   button.addEventListener('click', calculateResult);
   let result = document.querySelector('#result');
   
   function calculateResult() {
       const numberFromInput = document.querySelector('#container > #input').value;
       let numberOperations = Number(numberFromInput);
       const convertToSelector = document.querySelector('#selectMenuTo').value;
       let output = '';
    if(convertToSelector === 'hexadecimal'){ 
          let hexadecimalResult = [];
        while(numberOperations > 0) {
            let remainder = numberOperations % 16;
            hexadecimalResult.push(String(remainder));
            numberOperations = Math.floor(numberOperations / 16);
        }
        hexadecimalResult = hexadecimalResult.reverse().forEach((number) => {
      switch(number){
        case '10' : output+= 'A'
        break;
        case '11': output += 'B'
        break;
        case '12': output += 'C'
        break;
        case '13': output += 'D'
        break;
        case '14': output += 'E'
        break;
        case '15': output += 'F'
        break;
        default: output += number;
      }
        });
        result.value = output;
   }else if (convertToSelector === 'binary') {
    let binaryResult = [];
    while(numberOperations > 0) {
        let remainder = numberOperations % 2;
        binaryResult.push(String(remainder));
        numberOperations = Math.floor(numberOperations / 2);
    }
    binaryResult = binaryResult.reverse().forEach((number) => {
        output += number
    })
    result.value = output;
   }
}
}