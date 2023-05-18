import React, { useState } from "react"
export const Opration = React.createContext({
  data:[],
  setData:()=>{},
})

export const OprationHandler = ({children}) => {
  let [data,setData]=useState([])
  return (
  <Opration.Provider value={{
   data: data,
   setData: setData,
  }}>
    {children}
  </Opration.Provider>
  )
}

