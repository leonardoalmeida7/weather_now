import { useContext } from 'react'

import { CityWeatherContext } from '../contexts/CityWeatherContext'
import WeatherInformationForTheDay from './WeatherInformationForTheDay'

const DailyForecastSection = () => {

  const { weatherData } = useContext(CityWeatherContext)

  const date = new Date()
  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' })

  const weekdaysList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const weekdayPosition = weekdaysList.indexOf(weekday)

  const orderedDays =  weekdaysList.slice(weekdayPosition)

  if(orderedDays && weekdayPosition) {
    for(let i = 0; orderedDays.length < weekdaysList.length; i++){
      orderedDays.push(weekdaysList[i]);
    }
  }
  
  const dailyDataMax = weatherData?.weatherData?.daily?.temperature_2m_max;
  const dailyDataMin = weatherData?.weatherData?.daily?.temperature_2m_min;
  const dailyWeatherCode = weatherData?.weatherData?.daily?.weather_code;


  return (
    <section className='mt-5'>
        <h2>Daily forecast</h2>
        <div className='d-flex gap-3 flex-wrap mt-4'>
          {orderedDays.map((day, index) => (
            <WeatherInformationForTheDay key={index} day={day} maxTemp={dailyDataMax[index].toFixed(0)} minTemp={dailyDataMin[index].toFixed(0)} weatherCode={dailyWeatherCode[index]} />
          ))}
        </div>
      </section>
  )
}

export default DailyForecastSection