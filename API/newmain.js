
// document.querySelector('.temp');
// document.querySelector('.temp_max')
// document.querySelector('.temp_min')
// document.querySelector('.feels_like')
// document.querySelector('.humidity')
// document.querySelector('.pressure')

api_key = '423c497708da6059be222de9a9923d27'
const form = document.querySelector('#weather')



form.addEventListener('submit', (event) => {
    event.preventDefault()
    let search_by_city = document.querySelector('#search_by_city').value
    load_data(search_by_city) 
  })

const getData = async (city) => {
  if (city) {
      let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=imperial`)
      console.log(response.data)
      return response.data
  }}

  const DOM_elements = {
    weather_lists: '.weather'
  }

  const create_list = (id, forecast, temp_max, temp_min, feels_like, humidity, pressure) => {
    const html = `<div class= "list-group-item list-group-item-action list-group-item-light" id="${id}">   
    <ul class="list-group list-group-flush"></ul>
    <h3 id="city_name"> Current Weather: </h3>
    <li class="list-group-item">City Name: ${forecast}</li>
    <li class="list-group-item">Temp High: ${temp_max} F</li>
    <li class="list-group-item">Temp Low: ${temp_min} F </li>
    <li class="list-group-item">Feels Like: ${feels_like} F</li>
    <li class="list-group-item">Humidity: ${humidity} %</li>
    <li class="list-group-item">Pressure: ${pressure} %</li>
    </div>
    <br>`

    document.querySelector(DOM_elements.weather_lists).insertAdjacentHTML('beforeend', html)
  }

const load_data = async(search_by_city) => {
    const getWeather = await getData(search_by_city)
    create_list(getWeather.id, getWeather.name, getWeather.main.temp, getWeather.main.temp_max, getWeather.main.temp_min, getWeather.main.feels_like, getWeather.main.humidity, getWeather.main.pressure)
  }
