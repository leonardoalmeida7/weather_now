
import WeatherInformationForTheDay from './WeatherInformationForTheDay'

const DailyForecastSection = () => {
  
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
  

  return (
    <section className='mt-5'>
        <h2>Daily forecast</h2>
        <div className='d-flex gap-3 flex-wrap'>
          {orderedDays.map((day, index) => (
            <WeatherInformationForTheDay key={index} day={day} />
          ))}
        </div>
      </section>
  )
}

export default DailyForecastSection