import React, {useReducer,createContext } from 'react'

const Context = createContext()

export const Contextprovider = ({children})=>{
    const [state,dispatch] = useReducer("",{
      arrays:[
        {
          "name":"Hikaro",
          "age":29,
          "position":"fullstack developer"
        },
  
        {
          "name":"Samantha",
          "age":25,
          "position":"frontend developer"
        },
        
        {
          "name":"Joshua",
          "age":31,
          "position":"backend developer"
        }
      ]
    })
    
    return (
        <Context.Provider value={{...state,dispatch}}>{children}</Context.Provider>
    )
  }

  export default Context