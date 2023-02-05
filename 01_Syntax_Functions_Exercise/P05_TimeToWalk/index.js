function solve(steps, lengthOfStep, speedKmH) {
    let speedMeterePerSec = speedKmH / 3.6;
    let totalLengthToUniversity = steps * lengthOfStep; //meters
    let rest = Math.floor(totalLengthToUniversity / 500) * 60; //minutes
    let time = totalLengthToUniversity / speedMeterePerSec + rest; //(convert to seconds)
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time % 60);
  
    console.log(
      `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}`
    );
  }

solve(4000, 0.6, 5);
solve(2564, 0.7, 5.5);
solve(1000, 0.7, 0.5)

