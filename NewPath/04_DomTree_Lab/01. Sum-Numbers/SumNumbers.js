function calc() {
 const firstInput = document.getElementById('num1');
 const secondInput = document.getElementById('num2');
 let result = document.getElementById('sum');

 let fistNum = Number(firstInput.value);
 let secondNum = Number(secondInput.value);
 let sum = fistNum + secondNum;
 result.value = sum;
 
}
