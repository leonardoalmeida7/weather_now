
import CityWeatherContainer from './CityWeatherContainer'
import WeatherInfoContainer from './WeatherInfoContainer'

import styles from './WeatherInformationSection.module.css'

const WeatherInformationSection = () => {
  return (
    <section className={`${styles.weatherInformationSection}`}>
        <CityWeatherContainer />
        <WeatherInfoContainer />
    </section>
  )
}

export default WeatherInformationSection