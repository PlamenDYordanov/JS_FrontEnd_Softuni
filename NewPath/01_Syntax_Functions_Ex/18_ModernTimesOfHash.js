function solve(text){
let result = text.split(' ').filter((word) => word.startsWith('#') && word.length > 1 && isValid(word))
function isValid(word) {
    let newWord = word.slice(1);
    for (let char of newWord) {
       char = char.toLowerCase();
        let currentChar = char.charCodeAt(0)
        if(!(currentChar >= 97 && currentChar <= 122)) {
                return false;
        }
    }
   return true;
}
for (let currentWord of result) {
    console.log(currentWord.slice(1));
}
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');