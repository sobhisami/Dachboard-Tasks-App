import { Navigate, Route ,Routes} from "react-router-dom"
import { AddTask, Dachbord, Detail, LoginHome, Tasks } from "../Componants"
import { useContext } from "react"
import { Auth } from "../Context/Auth"


const Routers = () => {
  let context = useContext(Auth)
  return (
   <Routes>
    <Route path="" element={<LoginHome/>}/>
    <Route path="/login"  element={context.loginin ? <Navigate to={"/dachborad/tasks"}/> : <LoginHome/> }/>
    <Route path="/dachborad" element={context.loginin ? <Dachbord/> : <Navigate to={"/login"}/> }> 
    <Route path="/dachborad/tasks" element={<Tasks/>} /> 
    <Route path="/dachborad/tasks/:id/detail" element={<Detail/>} /> 
    <Route path="/dachborad/add" element={<AddTask/>}/> 
    </Route>
   </Routes>
  )
}

export default Routers
