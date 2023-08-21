import React, { useState } from "react"

export let Context=React.createContext({
  items:[],
  setItems:()=>{},
})
export let AuthContext = ({children}) => {
  const [items,setItems]=useState([]);
  return (
    <Context.Provider value={{
      items : items ,
      setItems
    }}>
      {children}
    </Context.Provider>
  )
}

