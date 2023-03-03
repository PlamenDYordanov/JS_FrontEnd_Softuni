function solve(firstSymbol, secondSymbol) {
  let result = [];
  let start = Math.min(firstSymbol.charCodeAt(0), secondSymbol.charCodeAt(0));
  let finish = Math.max(firstSymbol.charCodeAt(0), secondSymbol.charCodeAt(0));
  for (let i = start + 1; i < finish; i++) {
    result.push(String.fromCharCode(i));
  }
  console.log(result.join(" "));
}
solve("a", "d");
solve("#", ":");
solve("C", "#");
