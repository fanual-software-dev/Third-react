import React, {useContext} from 'react'
import Context  from './Context'

const Login = () => {
    const {arrays} = useContext(Context)
  return (
    <div className='card-div'>

       {arrays.map((element,id)=>(
        <div className='card'>
            <p>Name: {element.name}</p>
            <p>Age: {element.age}</p>
            <p>Position: {element.position}</p>
        </div>
       ))} 
    </div>
  )
}

export default Login

