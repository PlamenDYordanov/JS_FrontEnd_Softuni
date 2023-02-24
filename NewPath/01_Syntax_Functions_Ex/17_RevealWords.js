function solve(words, text) {
  let textArr = text.split(" ");
  let wordsArr = words.split(", ");
  for (let i = 0; i < wordsArr.length; i++) {
    let index = textArr.indexOf("*".repeat(wordsArr[i].length));
    if (index !== -1) {
      textArr[index] = wordsArr[i];
    }
  }
  console.log(textArr.join(" "));
}

solve("great", "softuni is ***** place for learning new programming languages");
solve(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
