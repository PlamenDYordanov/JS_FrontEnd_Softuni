function solve(arr) {
    let  data = {};
    let alphabetical = arr.sort((a,b) => a.localeCompare(b));
    for (let i = 0; i < alphabetical.length; i++) {
       let tokens = alphabetical[i].split(' : ');
       let name = tokens[0];
       let price = Number(tokens[1]);
       data[name] = {price};       
    }
    let currentLetter = 0;
    let allNames = Object.keys(data);
    for (let name of allNames) {
        let firstLetter = name.charCodeAt(0);
        if(firstLetter !== currentLetter) {
                console.log(name.charAt(0));
        }
        console.log(`${name}: ${data[name].price}`)
        currentLetter = firstLetter;
    }
}
solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']


);
solve(['Banana : 2',
'Rubic\'s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
);