import { useCityWeather } from '../hooks/useCityWeather'

import ContainsWeatherInfo from './ContainsWeatherInfo'

const WeatherInfoContainer = () => {
  const { weatherData } = useCityWeather();
  const date = new Date();
  const actualHour = date.getHours();

  const hourlyTemperatures = weatherData.weatherData.hourly.temperature_2m.slice(0, 24);
  const feels_like = hourlyTemperatures[actualHour].toFixed(0);
  const humidity = weatherData?.weatherData?.current?.relative_humidity_2m.toFixed(0);
  const wind_speed = weatherData?.weatherData?.current?.wind_speed_10m.toFixed(0);
  const precipitation = weatherData?.weatherData?.current?.precipitation.toFixed(0);
  const units = weatherData?.weatherData?.current_units;

  const { precipitation: precipitation_unit, wind_speed_10m } = units;

  return (
    <div className='d-flex gap-3 mt-4 flex-wrap flex-md-nowrap'>
        <ContainsWeatherInfo label="Feels Like" value={`${feels_like + "°" || '--'}`} />
        <ContainsWeatherInfo label="Humidity" value={`${humidity + "%" || '--'}`} />
        <ContainsWeatherInfo label="Wind Speed" value={`${wind_speed + ` ${wind_speed_10m || '--'}` || '--'}`} />
        <ContainsWeatherInfo label="Precipitation" value={`${precipitation + ` ${precipitation_unit || '--'}` || '--'}`} />
    </div>
  )
}

export default WeatherInfoContainer