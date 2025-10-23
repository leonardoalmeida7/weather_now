import IconSunny from '../assets/images/icon-sunny.webp'

import styles from './WeatherInformationSection.module.css'

const WeatherInformationSection = () => {
  return (
    <section className={styles.weatherInformationSection}>
        <div className='d-flex flex-column text-center'>
          <span>Berlin, Germany</span>
          <span>Tuesday, Aug 5, 2025</span>
          <div>
            <img src={IconSunny} alt="Sunny icon" />
            <span className='text-end'>20°</span>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </section>
  )
}

export default WeatherInformationSection