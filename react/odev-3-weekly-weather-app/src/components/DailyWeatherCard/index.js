import React from 'react'
import clouds from '../../icons/cloudy.svg'
import rain from '../../icons/rainy-1.svg'
import clear from '../../icons/day.svg'

function getDayName(day) {
  if (day > 6) day = 0
  switch (day) {
    case 0:
      return 'Paz'
    case 1:
      return 'Pzt'
    case 2:
      return 'Sal'
    case 3:
      return 'Çar'
    case 4:
      return 'Per'
    case 5:
      return 'Cum'
    case 6:
      return 'Cmt'
  }
}

function getImage(str) {
  if (str == 'Rain') return 'rainy-1'
  else if (str == 'Clear') return 'day'
  else if (str == 'Clouds') return 'cloudy'
  else return 'day'
}

function DailyWeatherCard({ weeklyWeather }) {
  const today = new Date()
  return (
    <div className="card-group">
      {weeklyWeather.map((item, index) => (
        <div key={index} class={index == 0 ? 'card today' : 'card'}>
          <div className="day">{getDayName(today.getDay() + index)}</div>
          <div className="icon">
            {(() => {
              if (item.weather[0].main == 'Rain')
                return <img src={rain} alt="" />
              else if (item.weather[0].main == 'Clear')
                return <img src={clear} alt="" />
              else if (item.weather[0].main == 'Clouds')
                return <img src={clouds} alt="" />
              else return <span>{item.weather[0].main}</span>
            })()}
          </div>
          <div className="temp">
            <span className="max">{Math.round(item.temp.max)}°</span>
            &nbsp;
            <span className="min">{Math.round(item.temp.min)}°</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DailyWeatherCard
