function solve(input) {
  let newInput = [];
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (
      input[i] === "<" &&
      input[i + 1] === "d" &&
      input[i + 2] === "i" &&
      input[i + 3] === "v" &&
      input[i + 4] === ">"
    ) {
      count++;
      if (count === 2) {
        newInput.push("</d");
        count = 0;
        i++;
      } else {
        newInput.push(input[i]);
      }
    } else {
      newInput.push(input[i]);
    }
  }
  console.log(newInput.join(""));
  //<div><p><div><div></p> -> "<div><p></div><div></p>"
}
solve("<div><p><div><div></p>");
solve("<div>div");
solve("<div>div<div><d");
