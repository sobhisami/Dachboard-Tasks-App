import { faBarChart, faFile, faUser } from "@fortawesome/free-regular-svg-icons"
import { faHome, faLayerGroup, faSearch, faSignOut } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { AddTasks, Details, HomeTasks } from "../components"
import { useContext, useState } from "react"
import { Context } from "../Context/Context"
import { Auth } from "../Context/Auth"

const Dashboard = () => {
  let AuthContext=useContext(Auth)
  let Navigate=useNavigate()
  let loginHandler=()=>{
    Navigate("/login")
    AuthContext.updateLogin(false)
    localStorage.removeItem("token")
  }
  return (
   <>
    <header className="navbar sticky-top navbar-light bg-light flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 bg-white" href="#" >Sobhi Task</a>
      <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <button onClick={loginHandler}  className="nav-link px-3 btn-light-main mx-1" href="#">Sign out
          <FontAwesomeIcon  className="mx-2 pt-1" icon={faSignOut}/> 
          </button>
        </div>
      </div>
    </header>
    <div className="container-fluid">
      <div className="row">
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"> 
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink end to="./home" className={props=>(props.isActive?"nav-link active":"nav-link")} aria-current="page">
                    <FontAwesomeIcon className="mx-2" icon={faHome}/>
                    Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="./add" className={props=>(props.isActive?"nav-link active":"nav-link")}>
                  <FontAwesomeIcon className="mx-2" icon={faFile}/>
                  New Task 
                </NavLink>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon className="mx-2" icon={faUser}/>
                  other link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon className="mx-2" icon={faBarChart}/>
                  other link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon className="mx-2" icon={faLayerGroup}/>
                other link
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Outlet />
      </div>
    </div>
   </>
  )
}

export default Dashboard
