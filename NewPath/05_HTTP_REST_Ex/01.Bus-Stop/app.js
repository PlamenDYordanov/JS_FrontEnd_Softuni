async function getInfo() {
   const inputBusId = document.getElementById('stopId');
   const resultContainer = document.getElementById('result');
   const resultStopName = document.getElementById('stopName');
   let resultBuses = document.getElementById('buses');
   const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/'
   const stopId = inputBusId.value;

   try {
    const allBusStop = await fetch(`${BASE_URL}${stopId}`) 
    const busInfo = await allBusStop.json();
    resultBuses.innerHTML = '';  
        const {name, buses} = busInfo
        for (const bus in buses) {
            const li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`
           resultBuses.appendChild(li);
        }
        resultStopName.textContent = name;
    // data.forEach(({name, buses}) =>{
    //         const li = document.createElement('li');
    //         for (const bus in buses) {
    //             li.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`
    //            resultBuses.appendChild(li);
    //         }
    //     resultStopName.textContent = name;
    // })
   }catch {
resultStopName.textContent = 'Error';
   }
}