function solve(input) {
  let groceries = [];
  const groceriesFromInput = input.shift().split("!");
  groceries = [...groceriesFromInput, ...groceries];
  const commandParser = {
    'Urgent': addAtStart,
    'Unnecessary': removeItem,
    'Correct': changeName,
    'Rearrange': rearrangeAtTheEnd

  }
  for (const commandLine of input) {
    if(commandLine !== 'Go Shopping!'){
    const commandTokens = commandLine.split(' ');
    const command = commandTokens[0]
    commandParser[command](...commandTokens.slice(1))
}
  }
  function addAtStart(item) {
    if(!groceries.includes(item)) {
        groceries.unshift(item)
    }
  }
  function removeItem(item) {
    if(groceries.includes(item)) {
       let index = groceries.indexOf(item);
       groceries.splice(index, 1);
    }
  }
  function changeName(oldItem, newItem) {
    if(groceries.includes(oldItem)) {
        let index = groceries.indexOf(oldItem);
        groceries[index] = newItem; 
     }
  }
  function rearrangeAtTheEnd(item) {
    if(groceries.includes(item)) {
        let index = groceries.indexOf(item);
        let currentItem = groceries[index];
        groceries.splice(index, 1);
        groceries.push(currentItem);
     }
  }
  console.log(groceries.join(', '));
}
solve([
  "Milk!Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);
solve([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
