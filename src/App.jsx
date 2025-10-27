import { useEffect } from 'react'
import PageHeader from './components/PageHeader'
import WeatherInformationSection from './components/WeatherInformationSection'
import DailyForecastSection from './components/DailyForecastSection'
import { useCityWeather } from './hooks/useCityWeather'

import './App.css'

function App() {
  const { weatherData, cityWeather, fetchCityWeatherData, error } = useCityWeather();
  
  useEffect(() => {
    if (cityWeather) {
      fetchCityWeatherData();
    }
  }, [cityWeather, fetchCityWeatherData]);

  return (
    <>
      <PageHeader />
      { weatherData && (
        <>
          <WeatherInformationSection />
          <DailyForecastSection />
        </>
      )}
      {!error && (
        <div className='text-center my-5'>
          <p className='h2 fw-bold'>No search result found!</p>
        </div>
      )}
    </>
  )
}

export default App
