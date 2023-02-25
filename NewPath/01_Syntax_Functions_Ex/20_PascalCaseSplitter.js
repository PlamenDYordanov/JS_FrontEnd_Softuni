function solve(word) {
    let newWord = [];
    let allText = '';
   let splitTheWord = word.split('');
   for (let i = 0; i < splitTheWord.length; i++) {
    if(i === 0){
        newWord.push(splitTheWord[i])
    } else {
        let currentChar = splitTheWord[i].charCodeAt(0)
        if(!(currentChar >= 97 && currentChar <= 122)) { 
           while(newWord.length > 0) {
            allText = allText + (newWord.shift());
           }
           allText = allText + ' '
           newWord.push(splitTheWord[i]);
    }else {
        newWord.push(splitTheWord[i]);
    }
    }
   }
   while(newWord.length > 0) {
    allText = allText + (newWord.shift());
   }
   let result = allText.split(' ');
   console.log(result.join(', '));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');