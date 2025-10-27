import React from 'react'

const WeatherInformationForTheDay = ({ day }) => {


  return (
    <div style={{ flex: '1 1 30%', textAlign: 'center', maxWidth: '30%'}}>
      <span>{day}</span>
      <img src="" alt="" />
      <div>
        <span>20°</span>
        <span>13°</span>
      </div>
    </div>
  )
}

export default WeatherInformationForTheDay