function solve(sentance) {
let pattern = /[a-zA-Z0-9]+/g;
let foundMatch = sentance.match(pattern);
console.log(foundMatch.join(', ').toUpperCase());
}
solve('Hi, how are you?');
solve('hello');