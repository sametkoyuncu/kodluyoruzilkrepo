import React from 'react'

function CitySelector({ setCityCoords }) {
  const cities = [
    {
      id: 745042,
      name: 'İstanbul',
      state: '',
      country: 'TR',
      coord: {
        lon: 28.983311,
        lat: 41.03508,
      },
    },
    {
      id: 323784,
      name: 'Ankara',
      state: '',
      country: 'TR',
      coord: {
        lon: 32.833328,
        lat: 39.916672,
      },
    },
    {
      id: 750268,
      name: 'Bursa',
      state: '',
      country: 'TR',
      coord: {
        lon: 29.08333,
        lat: 40.166672,
      },
    },
    {
      id: 311044,
      name: 'İzmir',
      state: '',
      country: 'TR',
      coord: {
        lon: 27.092291,
        lat: 38.462189,
      },
    },
    {
      id: 305267,
      name: 'Kütahya',
      state: '',
      country: 'TR',
      coord: {
        lon: 29.5,
        lat: 39.25,
      },
    },
    {
      id: 300617,
      name: 'Sivas',
      state: '',
      country: 'TR',
      coord: {
        lon: 37.001949,
        lat: 39.791649,
      },
    },
  ]
  const handleChange = (event) => {
    let coord = event.target.value
    coord = coord.split('-')
    setCityCoords(coord)
  }
  return (
    <select className="dropdown" onChange={handleChange}>
      <option>Şehir seçiniz..</option>
      {cities.map((city) => (
        <option
          key={city.id}
          value={`${city.coord.lat}-${city.coord.lon}-${city.name}`}
        >
          {city.name}
        </option>
      ))}
    </select>
  )
}

export default React.memo(CitySelector)
