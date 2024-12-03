import React, { useState } from 'react'
import Weather from './Weather'

const Home = () => {
    const [Data,setData] = useState('')
    const [cityName,setCityName] = useState('')
    const [isloading,setIsLoading] = useState(false)

    const fetchData = async ()=>{
        console.log(cityName)
        setIsLoading(true)
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fdeeecd7e5ca2a354a8e5bacd179a72d`)
        if (res.status!==200){
            setData('')
            setCityName('')
            setIsLoading(false)
            document.getElementById('error').style.display="block"
            return
        }
        
        const data = await res.json()
        setData(data)
        setCityName('')
        setIsLoading(false)
        document.getElementById('error').style.display="none"

    
    }

    // if (error){
    //     
    // }

    // else{
    //    
    // }

 

  return (
    <div className='d-flex flex-column align-items-center my-5'>
        <div className='container input d-flex justify-content-center'>
          <input onChange={(e)=>setCityName(e.target.value)} value={cityName} className='px-5 w-50 py-3' type='search' placeholder='Enter City Name'/>
          <button onClick={fetchData}  className='button p-2 px-5  text-light fw-bold'>Show Weather</button>
        </div>
        {Data?<div className='container d-flex justify-content-between p-2 px-5 m-5'>
          <p className='d-flex flex-column text-light fs-3 align-items-center fw-bold'>{Data.name}<span className='fs-1'>{(Data.main.feels_like-273.15).toFixed(2)}</span></p>
          <p className='description text-light fs-4'>{Data.weather[0].description}</p>
        </div>:""}
        <Weather props={Data}/>
        <p id='error' className='text-light error my-5'>Opps no such city found</p>
    </div>
  )
}

export default Home
