function solve(name, lastName, hairColor) {
    let person ={name, lastName, hairColor};
    return JSON.stringify(person);
}
console.log(solve('George', 'Jones', 'Brown'));
solve('Peter', 'Smith', 'Blond');