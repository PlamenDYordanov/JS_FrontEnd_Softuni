function solve(input) {
    let pattern = /[a-zA-Z]+/g;
    let foundMatch = input.match(pattern);
    console.log(foundMatch.join(', ').toUpperCase())
}
solve('Hi, how are you?');
solve('hello');