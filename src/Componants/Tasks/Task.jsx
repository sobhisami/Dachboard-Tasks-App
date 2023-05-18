import { faArrowRight, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

const Task = ({src,data,Deleted}) => {
  let Navigate=useNavigate()
  let Details=()=>{
    Navigate(`/dachborad/tasks/${data.name}/detail`)
  }
  let deletedHandle=()=>{
    Deleted(data.id)
    console.log(data.id);
  }
  return (
    <div className="col-md-4">
      <div className="card task card">
        <img src={src} className="card-img-top" alt="Avatar" />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            <span data-feather="calendar"></span>{data.startDate}
            <span className="main-color"> To </span> {data.endDate}</h6>
          <p className="card-text">{data.detail} </p>
          <hr />
          <span className="btn badge-light-warning status-btn Wating">{data.status}</span>
          <span onClick={Details}  className="btn btn-bg-gray pull-right">
            <FontAwesomeIcon icon={faArrowRight}/>
          </span>
          <span className="btn btn-bg-gray pull-right">
          <FontAwesomeIcon icon={faTrashAlt} onClick={deletedHandle}/> 
          </span>
        </div>
      </div>
    </div>
  )
}

export default Task
