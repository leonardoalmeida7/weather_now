import { weatherCodeToIcon } from '../utils/weatherCodeConversor'

const HourlyForecast = ({ weatherCode }) => {
    const weatherIcon = weatherCodeToIcon(weatherCode);
  return (
    <div>
        <img src={weatherIcon} alt="" style={{width: "100px"}} />
        <span>test</span>
        <span></span>
    </div>
  )
}

export default HourlyForecast