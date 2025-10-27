import { useCityWeather } from '../hooks/useCityWeather'
import IconLoading from '../assets/images/icon-loading.svg'


import IconSunny from '../assets/images/icon-sunny.webp'

import styles from './CityWeatherContainer.module.css'

const CityWeatherContainer = () => {
  const { weatherData, loading } = useCityWeather();

  const actualDate = new Date();
  const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
  const formattedDate = actualDate.toLocaleDateString('en-US', options);

  return (
    <div className={`${styles.weatherInfoContainer} d-flex flex-column text-center p-5 rounded-4  ${loading ? styles.loading : ''}`}>
      { !loading && (
        <>
          <span className={`${styles.location} m-0`}>
            {weatherData?.name || 'Select a city'}
          </span>
          <span className={`${styles.date} m-0`}>{formattedDate}</span>
          <div className='d-flex align-items-center justify-content-center gap-2 mt-3'>
            <img src={IconSunny} alt="Sunny icon" className={`${styles.icon}`} />
            <span className={`${styles.temperature}`}>
              {loading ? '--' : weatherData?.weatherData?.current?.temperature_2m || '--'}°
            </span>
          </div>
        </>
      )}
      {
        loading && (
          <div  className='p-5 d-flex flex-column align-items-center gap-3'>
            <img src={IconLoading} alt="Loading icon" className={styles.loadingIcon} />
            <span className='fs-3'>Loading...</span>
          </div>
        )
      }
    </div>
  )
}

export default CityWeatherContainer