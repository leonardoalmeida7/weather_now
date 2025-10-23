import { useState } from 'react'
import PageHeader from './components/PageHeader'
import WeatherInformationSection from './components/WeatherInformationSection'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PageHeader />
      <WeatherInformationSection />
    </>
  )
}

export default App
