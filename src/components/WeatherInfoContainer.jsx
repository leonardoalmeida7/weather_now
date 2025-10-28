import { useContext } from 'react'

import { CityWeatherContext } from '../contexts/CityWeatherContext'
import ContainsWeatherInfo from './ContainsWeatherInfo'

const WeatherInfoContainer = () => {
  const { weatherData } = useContext(CityWeatherContext)
  const date = new Date();
  const actualHour = date.getHours();

  const hourlyTemperatures = weatherData.weatherData.hourly.temperature_2m.slice(0, 24);
  const feels_like = hourlyTemperatures[actualHour].toFixed(0);
  const humidity = weatherData?.weatherData?.current?.relative_humidity_2m.toFixed(0);
  const wind_speed = weatherData?.weatherData?.current?.wind_speed_10m.toFixed(0);
  const precipitation = weatherData?.weatherData?.current?.precipitation.toFixed(0);

  return (
    <div className='d-flex gap-3 mt-4 flex-wrap'>
        <ContainsWeatherInfo label="Feels Like" value={`${feels_like + "°" || '--'}`} />
        <ContainsWeatherInfo label="Humidity" value={`${humidity + "%" || '--'}`} />
        <ContainsWeatherInfo label="Wind Speed" value={`${wind_speed + " km/h" || '--'}`} />
        <ContainsWeatherInfo label="Precipitation" value={`${precipitation + " mm" || '--'}`} />
    </div>
  )
}

export default WeatherInfoContainer