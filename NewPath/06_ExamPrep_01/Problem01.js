function solve(input) {
let n = input.shift();
let obj = {};
let commandParser = {
    'Add': addPiece,
    'Remove': removePiece,
    'ChangeKey': ChangeKey
};
for (let index = 0; index < n; index++) {
    let curPieceTokens = input.shift().split('|');
    let [piece, composer, key] = curPieceTokens;
    obj[piece] = {composer, key};
}
for (let inputLine of input) {
    if(inputLine === 'Stop') {
        break;
    }
    let commandTokens = inputLine.split('|');
    let command = commandTokens[0];
    commandParser[command](...commandTokens.slice(1));
}
for (const key in obj) {
      console.log(`${key} -> Composer: ${obj[key].composer}, Key: ${obj[key].key}`);

}
function addPiece(piece, composer, key) {
    if(!obj.hasOwnProperty(piece)) {
        obj[piece] = {composer, key};
        console.log(`${piece} by ${composer} in ${key} added to the collection!`)
    }else {
        console.log(`${piece} is already in the collection!`)
    }
}
function removePiece(piece) {
    if(obj.hasOwnProperty(piece)) {
        delete obj[piece]
        console.log(`Successfully removed ${piece}!`)
    }else {
        console.log(`Invalid operation! ${piece} does not exist in the collection.`)
    }
}
function ChangeKey(piece, newKey){
if(obj.hasOwnProperty(piece)) {
    obj[piece].key = newKey;
    console.log(`Changed the key of ${piece} to ${newKey}!`)
}else {
    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
}
}
}
solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  );
  solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  );