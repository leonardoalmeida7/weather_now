import { weatherCodeToIcon } from '../utils/weatherCodeConversor'

import styles from './WeatherInformationForTheDay.module.css'

const WeatherInformationForTheDay = ({ day, maxTemp, minTemp, weatherCode }) => {
  const weatherIcon = weatherCodeToIcon(weatherCode);

  return (
    <div className={`${styles.weatherInfoContainer} d-flex flex-column align-items-center p-3 rounded-4 gap-2`}>
      <span className='fs-4 text-white'>{day}</span>
      <img src={weatherIcon} alt="icon" style={{width: '80%'}}/>
      <div className='d-flex gap-4 justify-content-center'>
        <span className='text-white'>{maxTemp}°</span>
        <span>{minTemp}°</span>
      </div>
    </div>
  )
}

export default WeatherInformationForTheDay