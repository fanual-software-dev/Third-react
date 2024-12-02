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
        <input onChange={(e)=>setCityName(e.target.value)} value={cityName} className='p-3 w-50' type='search' placeholder='Enter City Name'/>
        <button onClick={fetchData}  className='my-5 btn btn-warning p-2 px-5  text-dark fw-bold'>Show Weather</button>
        {isloading?<p className='text-light'>...loading</p>:''}
        {Data?<Weather props={Data}/>:""}
        <p id='error' className='text-light error'>Opps no such city found</p>
    </div>
  )
}

export default Home
