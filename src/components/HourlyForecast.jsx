import { weatherCodeToIcon } from '../utils/weatherCodeConversor'

import styles from "./HourlyForecastSection.module.css";
const HourlyForecast = ({ weatherCode, time, temperature }) => {
    const weatherIcon = weatherCodeToIcon(weatherCode);

    const formatTime = (time) => {
        const hour = time.split('')[0] === '0' ? time.split('')[1] : time;
        const formatHour = hour > 12 ? hour - 12 : hour;
        const period = time >= 12 ? 'PM' : 'AM';
        return `${formatHour} ${period}`;
    };

    return (
      <div className={`${styles.hourlyForecast} d-flex justify-content-between align-items-center my-2 p-2 rounded-3`}>
        <div>
          <img src={weatherIcon} alt="icon" className={styles.weatherIcon} />
          <span className={styles.time}>{formatTime(time)}</span>
        </div>
          <span className={styles.temperature}>{temperature.toFixed(0)}°</span>
    </div>
  )
}

export default HourlyForecast