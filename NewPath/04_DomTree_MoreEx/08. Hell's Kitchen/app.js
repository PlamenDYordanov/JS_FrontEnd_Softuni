function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let restaurant = {};
    let input = document.querySelector("#inputs textarea");
    let bestRestaurantOutput = document.querySelector('#bestRestaurant p');
    let bestWorkersOutput = document.querySelector('#workers p');
    let newInput = JSON.parse(input.value);
    for (let index = 0; index < newInput.length; index++) {
      let [restaurantName, workers] = newInput[index].split(" - ");
      let splitInput = newInput[index].split("-");
      let nameOfRestaurant = splitInput[0];
      let arrayOfWorkers = [];
      workers = workers.split(" ");
      for (let i = 0; i < workers.length; i += 2) {
        let nameOfWorker = workers[i];
        let currentSalary = Number(workers[i + 1].split(",")[0]);
        if (!restaurant.hasOwnProperty(restaurantName)) {
          restaurant[restaurantName] = [];
        }
        restaurant[restaurantName].push({
          name: nameOfWorker,
          salary: currentSalary,
        });
      }
      const currentRestaurantValues = Object.values(restaurant[restaurantName]);
      let size = currentRestaurantValues.length;
      let sum = 0;
      for (const worker of currentRestaurantValues) {
        let type = typeof worker.salary;
        if (type === "number") {
          sum += worker.salary;
        }else {
          size--
        }
      }
      restaurant[restaurantName].average = (sum / size).toFixed(2);
    }
    const values = Object.values(restaurant);
    let bestAverage = values.sort((a, b) => b.average - a.average)[0];
    let bestSalary = bestAverage.sort((a, b) => b.salary - a.salary)[0];
    const entries = Object.entries(restaurant);
    let name = entries.sort((a, b) => b[1].average - a[1].average)[0][0];
    let average = bestAverage.average;
    let highestSalary = Number(bestSalary.salary).toFixed(2);
    const outputBestRestaurant = `Name: ${name} Average Salary: ${average} Best Salary: ${highestSalary}`;
    let outputBestWorkers = [];
    for (const key in bestAverage) {
      let type = typeof bestAverage[key].salary;
      if (type === "number") {
        const currentName = bestAverage[key].name;
        const currentSalary = Number(bestAverage[key].salary).toFixed(0);
        let currentResult = `Name: ${currentName} With Salary: ${currentSalary}`;
        outputBestWorkers.push(currentResult);
      }
    }
    bestRestaurantOutput.textContent = outputBestRestaurant;
    bestWorkersOutput.textContent = outputBestWorkers.join(' ');
  }
}
