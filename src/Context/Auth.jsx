import React, { useState } from "react";

export let Auth = React.createContext({
  login:false,
  updateLogin:(status)=>{},
  token:"",
})
export let AuthHandler = ({children}) => {
    let [login,setLogin]=useState(JSON.parse(localStorage.getItem('login')));
    let updateLogin=(status)=>{
      setLogin(status);
      localStorage.setItem(`login`, status)
      
    }
   return(
    <Auth.Provider value={{
      login:login,
      updateLogin:updateLogin,
      token:""
      }}>
      {children}
    </Auth.Provider>
   )
}


