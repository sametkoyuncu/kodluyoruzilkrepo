import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import './App.css'
import DailyWeatherCard from './components/DailyWeatherCard'
import CitySelector from './components/CitySelector'

let weeklyWeather = []

function App() {
  const defaultCoord = ['40.166672', '29.08333', 'İstanbul']

  const [cityCoords, setCityCoords] = useState(defaultCoord)

  const url = 'https://api.openweathermap.org/data/2.5/'
  const API_KEY = 'acf29f18ac07159e5b89a6bc8618a979'

  useEffect(() => {
    axios
      .get(
        `${url}onecall?lat=${cityCoords[0]}&lon=${cityCoords[1]}&lang=tr&units=metric&appid=${API_KEY}`
      )
      .then((res) => {
        console.log(res.data.daily)
        weeklyWeather = res.data.daily
        weeklyWeather.pop()
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [cityCoords])
  return (
    <div className="App">
      <div className="navbar">
        <CitySelector setCityCoords={setCityCoords} />
      </div>
      <DailyWeatherCard weeklyWeather={weeklyWeather} />
    </div>
  )
}

export default App
