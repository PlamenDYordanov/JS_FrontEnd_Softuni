function attachEvents() {
  const BASE_URL = `http://localhost:3030/jsonstore/forecaster/locations/`;
  const BASE_URL_UPCOMING = `http://localhost:3030/jsonstore/forecaster/upcoming/`;
  const BASE_URL_TODAY = `http://localhost:3030/jsonstore/forecaster/today/`;
  const cityInput = document.getElementById("location");
  const button = document.getElementById("submit");
  let forecastContainer = document.getElementById('forecast')
  let todayForecastContainer = document.getElementById('current');
  let upcomingForecastContainer = document.getElementById('upcoming');
  button.addEventListener("click", forecastHandler);
  function forecastHandler() {
      fetch(`${BASE_URL}`)
      .then((res) => res.json())
      .then((cityForecastData) => {
          todayForecastContainer.textContent = '';
          upcomingForecastContainer.textContent = '';
          let isExist = false;
          forecastContainer.style.display= 'block';
          for (const city of cityForecastData) {
                  //today Forecast
                  if(city.name === cityInput.value){
                    isExist =true;
                  fetch(`${BASE_URL_TODAY}${city.code}`)
                  .then((res) => res.json())
                  .then((todayForecast) => {
                    let [name , abbreviature] = todayForecast.name.split(', ');
                    let{condition, high, low} = todayForecast.forecast;
                    let code =''
                switch(condition) {
                    case 'Sunny': code = '&#x2600'
                    break;
                    case 'Partly sunny': code = '&#x26C5'
                    break;
                    case 'Overcast': code = '&#x2601'
                    break;
                    case 'Rain': code = '&#x2614'
                    break;
                }
    let createDivForecast = createElement('div','',todayForecastContainer,'',['forecast']);
    let conditionSymbol = createElement('span', '',createDivForecast,'', ['condition', 'symbol']);
    conditionSymbol.innerHTML= `${code}`;
    let conditionContainer = createElement('span','',createDivForecast, '', ['condition']);
    let forecastCityName = createElement('span',`${name}, ${abbreviature}`, conditionContainer, '', ['forecast-data'])
    let temperatureCity = createElement('span','', conditionContainer, '', ['forecast-data'])
    temperatureCity.innerHTML = `${low}&#176/${high}&#176`
    let conditionCity = createElement('span',`${condition}`, conditionContainer, '', ['forecast-data'])

           })
           //upcoming Forecast
           fetch(`${BASE_URL_UPCOMING}${city.code}`)
           .then((res) => res.json())
           .then((upcomingForecastInfo) => {
            let {forecast, name} = upcomingForecastInfo;
            let upcomingContainer = document.getElementById('upcoming');
            let forecastContainer = createElement('div','',upcomingContainer,'',['forecast-info']);
           for (const {condition, high, low} of forecast) {
               let code ='';
               switch(condition) {
                   case 'Sunny': code = '&#176'
                   break;
                   case 'Partly sunny': code = '&#x26C5'
                   break;
                   case 'Overcast': code = '&#x2601'
                   break;
                   case 'Rain': code = '&#x2614'
                   break;
                }
                let upcomingContainerForecast = createElement('span','',forecastContainer,'',['upcoming']);
                let forecastForCurrentDayContainer = createElement('span','',upcomingContainerForecast,'',['symbol']);
                forecastForCurrentDayContainer.innerHTML= `${code}`;
                let currentTemperature = createElement('span','', upcomingContainerForecast, '', ['forecast-data']);
                currentTemperature.innerHTML = `${low}&#176/${high}&#176`
                let currentCondition = createElement('span',`${condition}`, upcomingContainerForecast, '', ['forecast-data']);
           }

           })
          
        }
    }
    if(!isExist) {
        forecastContainer.innerHTML = 'Error'
    }
   
      })
      .catch((err) => {
        forecastContainer.innerHTML = 'Error'
      });
    }
    
  function createElement(type, content, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type);
  
    if (content && type !== "input") {
      htmlElement.textContent = content;
    }
    if (content && type === "input") {
      htmlElement.value = content;
    }
    if (id) {
      htmlElement.id = id;
    }
    // [item1, item2, item3]
    if (classes) {
      htmlElement.classList.add(...classes);
    }
    //{src: link, href: link to site}
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }
    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }
    return htmlElement;
  }
}



attachEvents();
