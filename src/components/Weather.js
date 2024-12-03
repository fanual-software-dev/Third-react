import React from 'react'

const Weather = ({props}) => {
  return (
    <div className='weather-data d-flex justify-content-evenly  pt-3 container position-absolute'>
        {/* <p className='text-light fs-3 fw-bold mb-5'>{props.name} {(props.main.feels_like-273.15).toFixed(2)}</p> */}
        <p className='p text-light d-flex flex-column align-items-center'>{props?(props.main.feels_like-273.15).toFixed(2):""}<span>Feels Like</span></p>
        <p className='p text-light d-flex flex-column align-items-center'>{props?props.main.humidity:""}<span>Humidity</span></p>
        <p className='p text-light d-flex flex-column align-items-center'>{props?props.wind.speed+" KPH":""}<span>Wind Speed</span></p>
        <p className='p text-light d-flex flex-column align-items-center'>{props?props.main.sea_level:""}<span>Sea Level</span></p>
        
    </div>
  )
}

export default Weather
