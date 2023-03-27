function solve() {
  const departureBtn = document.getElementById("depart");
  const arrivalsBtn = document.getElementById("arrive");
  let infoOutput = document.querySelector("#info > .info");
  const BASE_URL = `http://localhost:3030/jsonstore/bus/schedule/`;
  let stopId = `depot`;
  function depart() {
    departureBtn.disabled = true;
    arrivalsBtn.disabled = false;
    fetch(`${BASE_URL}${stopId}`)
      .then((res) => res.json())
      .then((nextStopInfo) => {
        infoOutput.textContent = nextStopInfo.name;
        stopId = nextStopInfo.next
    });
  }

  async function arrive() {
    departureBtn.disabled = false;
    arrivalsBtn.disabled = true;
    fetch(`${BASE_URL}${stopId}`)
      .then((res) => res.json())
      .then((nextStopInfo) => {
        infoOutput.textContent = nextStopInfo.name;
        stopId = nextStopInfo.next
    });
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
