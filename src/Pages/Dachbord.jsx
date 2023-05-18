import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { Nav } from "../Componants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignOut } from "@fortawesome/free-solid-svg-icons"
import { Auth } from "../Context/Auth"
import { useContext, useState } from "react"
import Swal from "sweetalert2"

const Dachbord = () => {
  let Context =useContext(Auth)
  let [search,setsearch]=useState("")
  let Navigate=useNavigate();
  let onClickHandle=()=>{
    Navigate("/login")
    Context.updateLogin(false);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'God Bay',
      showConfirmButton: false,
      timer: 800
    })
  }

  return (
    <>
      <header className="navbar sticky-top navbar-light bg-light flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Sobhi Task</a>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <button onClick={onClickHandle} className="nav-link px-3 btn-light-main btn">
              <FontAwesomeIcon icon={faSignOut} className="icon" />
              Sign out </button>
          </div>
        </div>
      </header>
      <Outlet />
      <Nav />
    </>
  )
}

export default Dachbord
