import { Navigate, Route, Routes } from "react-router-dom"
import {Dashboard, Login} from '../Pages'
import { AddTasks, Details, HomeTasks, Register } from "../components"
import Error from "../Error/Error"
import { useContext } from "react"
import { Auth } from "../Context/Auth"
const Router = () => {
  let context=useContext(Auth)
  return (
  <>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/login" element={context.login ? <Navigate to="/dashboard/home"/> : <Login/>}/>
    <Route path="/dashboard" element={context.login ?  <Dashboard/> : <Navigate to="/login"/>}>
       <Route path="/dashboard/home" element={<HomeTasks/>} />
       <Route path="/dashboard/home/detail/:id" element={<Details/>}/>
       <Route path="/dashboard/add" element={<AddTasks/>} />
    </Route>
     <Route path="*" element={<Error/>}/>
  </Routes>
  </>
  )
}

export default Router
