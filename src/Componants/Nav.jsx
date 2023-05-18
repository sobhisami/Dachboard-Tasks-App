import { faBarChart, faFileAlt, faHome, faLayerGroup, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className={props => props.isActive ? "nav-link active" : "nav-link"} aria-current="page" to="/dachborad/tasks" end>
              <span className="icon">
                <FontAwesomeIcon icon={faHome} />
              </span>
              Dachborad
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={props => props.isActive ? "nav-link active" : "nav-link"} to="/dachborad/add">
              <span className="icon">
                <FontAwesomeIcon icon={faFileAlt} />
              </span>
              Add New Task
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <span className="icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              User
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <span className="icon">
                <FontAwesomeIcon icon={faBarChart} />
              </span>
              BarChart
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <span className="icon">
                <FontAwesomeIcon icon={faLayerGroup} />
              </span>
              LayerGroup
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
