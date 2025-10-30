import { useCityWeather } from '../hooks/useCityWeather'
import IconLoading from '../assets/images/icon-loading.svg'


import IconSunny from '../assets/images/icon-sunny.webp'

import styles from './CityWeatherContainer.module.css'

const CityWeatherContainer = () => {
  const { weatherData, loading } = useCityWeather();

  const actualDate = new Date();
  const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
  const formattedDate = actualDate.toLocaleDateString('en-US', options);

  const currentTemperature = loading ? '--' : weatherData?.weatherData?.current?.temperature_2m || '--';
  const regionName = new Intl.DisplayNames(['en'], { type: 'region' });

  const currentRegion = regionName.of(weatherData?.country);

  return (
    <div className={`${styles.weatherInfoContainer} d-flex flex-column flex-md-row justify-content-between align-items-center text-center p-5 rounded-4  ${loading ? styles.loading : ''}`}>
      { !loading && (
        <>
          <div className='d-flex flex-column text-xl-start'>
            <span className={`${styles.location} m-0`}>
              {`${weatherData?.name}, ${currentRegion}` || 'Select a city'}
            </span>
            <span className={`${styles.date} m-0`}>{formattedDate}</span>
          </div>
          <div className='d-flex align-items-center justify-content-center gap-2 mt-3'>
            <img src={IconSunny} alt="Sunny icon" className={`${styles.icon}`} />
            <span className={`${styles.temperature}`}>
              {currentTemperature.toFixed(0)}°
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