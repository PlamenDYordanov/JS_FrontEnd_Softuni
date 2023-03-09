function solve(obj) {
    let person = JSON.parse(obj);
    for (const key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}
solve('{"name": "George", "age": 40, "town": "Sofia"}');
solve('{"name": "Peter", "age": 35, "town": "Plovdiv"}');