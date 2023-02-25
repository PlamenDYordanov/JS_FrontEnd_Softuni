function solve(word, text) {
  let textArr = text.split(" ");
  let hasIt = false;
  for (let currentWord of textArr) {
    let wordToLowerCase = currentWord.toLowerCase();
    if (wordToLowerCase === word) {
      hasIt = true;
      console.log(word);
    }
  }
  if (!hasIt) {
    console.log(word + " not found!");
  }
}
solve("javascript", "JavaScript is the best programming language");
solve("python", "JavaScript is the best programming language");
