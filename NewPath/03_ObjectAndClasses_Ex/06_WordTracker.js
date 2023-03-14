function solve(input) {
  let objWords = {};
  let requiredWords = input[0].split(" ");
  for (const word of requiredWords) {
    objWords[word] = 0;
  }
  for (let i = 1; i < input.length; i++) {
    let currentWord = input[i];
    for (const requireWord in objWords) {
      if (currentWord === requireWord) {
        objWords[requireWord] += 1;
      }
    }
  }
  Object.entries(objWords)
    .sort((left, right) => right[1] - left[1])
    .forEach((word) => console.log(`${word[0]} - ${word[1]}`));
}
solve([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
solve([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
