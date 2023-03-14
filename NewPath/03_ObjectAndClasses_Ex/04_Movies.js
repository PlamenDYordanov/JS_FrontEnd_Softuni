function solve(input) {
  let movies = [];
  for (let currentInput of input) {
    if (currentInput.includes("addMovie")) {
      let name = currentInput.split("addMovie ")[1];
      movies.push({ name });
    } else if (currentInput.includes("onDate")) {
      let name = currentInput.split(" onDate ")[0];
      let date = currentInput.split(" onDate ")[1];
      let movie = movies.find((movie) => movie.name === name);
      if (movie) {
        movie.date = date;
      }
    } else if (currentInput.includes("directedBy")) {
      let name = currentInput.split(" directedBy ")[0];
      let director = currentInput.split(" directedBy ")[1];
      let movie = movies.find((movie) => movie.name === name);
      if (movie) {
        movie.director = director;
      }
    }
  }
  for (const curMovie of movies) {
    if (Object.keys(curMovie).length === 3) {
      console.log(JSON.stringify(curMovie));
    }
  }
}
solve([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
solve([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);
