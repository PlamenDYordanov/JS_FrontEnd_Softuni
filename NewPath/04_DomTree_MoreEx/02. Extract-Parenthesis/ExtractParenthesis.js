function extract(content) {
const paragraph = document.getElementById('content').textContent.split(')');
let result = []
for (let text of paragraph) {
  let output =  text.split('(')[1];
    if(output !== undefined){
        result.push(output);
    }
}
return content = result.join('; ')
// for (const symbol of paragraph) {
//   if(symbol === '('){
//     isThereAParenthesis = true;
//     continue;
//   }
//   if(symbol === ')'){
//     isThereAParenthesis = false;
//     result.push(word);
//     word = [];
//     continue
//   }
//   if(isThereAParenthesis) {
//     word.push(symbol);
//   }
// }

}