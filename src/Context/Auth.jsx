import React, { useState } from "react";
export const Auth = React.createContext({
loginin:false,
updateLogin:(status)=>{},
token:"",
});

export const AuthHandle = ({children}) => {
  let [loginin,setLogin]=useState(JSON.parse(localStorage.getItem('loginin')));
  let updateLogin=(status)=>{
    setLogin(status);
    localStorage.setItem('loginin', status);
  }
  return (
    <Auth.Provider value={{
      loginin:loginin,
      updateLogin:updateLogin,
      token:"",
    }}>
   {children}
    </Auth.Provider>
  )
}
