import React from 'react'

const Weather = ({props}) => {
  return (
    <div className='weather-data d-flex flex-column align-items-center w-100'>
        <p className='text-light fs-3 fw-bold mb-5'>{props.name} {(props.main.feels_like-273.15).toFixed(2)}</p>
        <div className='details w-100 d-flex px-5 justify-content-center'>
            <p className='p text-light d-flex flex-column align-items-center'><span>Description</span> {props.weather[0].description}</p>
            <p className='p text-light d-flex flex-column align-items-center'><span>Humidity</span> {props.main.humidity}</p>
            <p className='p text-light d-flex flex-column align-items-center'><span>Feels Like</span>{(props.main.feels_like-273.15).toFixed(2)}</p>
            <p className='p text-light d-flex flex-column align-items-center'><span>Wind Speed</span> {props.wind.speed} KPH</p>
            <p className='p text-light d-flex flex-column align-items-center'><span>Sea Level</span> {props.main.sea_level}</p>
        </div>
    </div>
  )
}

export default Weather
