function solve() {
  // const button =  document.querySelector('body form > input');
  // button.addEventListener('click', checkConventionCases);
  let textInput = document.querySelector('#text').value.split(' ');
  const currConvention = document.querySelector('#naming-convention').value;
  let output = document.querySelector('#result');
  // function checkConventionCases() {
    let result = '';
    let index = 0;
    if(currConvention === 'Camel Case'){
        for (let word of textInput) {
        if (index === 0) {
      let firstLetter = word.slice(0,1).toLowerCase();
      let remainingLetters = word.slice(1).toLowerCase();
       result += firstLetter+remainingLetters;
       index ++;
      }else {
        let firstLetter = word.slice(0,1).toUpperCase();
        let remainingLetters = word.slice(1).toLowerCase();
       result += firstLetter+remainingLetters;
      }
    }
    }else if( currConvention === 'Pascal Case'){
      for (let word of textInput) {
        let firstLetter = word.slice(0,1).toUpperCase();
        let remainingLetters = word.slice(1).toLowerCase();
       result += firstLetter+remainingLetters;
      }
    }else {
      result = 'Error!'
    }
    output.textContent = result;
  }
// }