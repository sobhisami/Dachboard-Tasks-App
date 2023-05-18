import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from "../Resources/img/2.png"
import { faEdit } from "@fortawesome/free-solid-svg-icons"
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { Opration } from "../Context/Opration"
const Detail = () => {
  let params = useParams();
  let context = useContext(Opration)
  let [task,setTasks] =useState([])
  let fetchData=() =>{
  let tasks = context.data.find(e=> e.id=params.id)
  setTasks(tasks)
  }
  useEffect(()=>{
  fetchData();
  },[])
  let changeStatus=(New)=>{
    setTasks((neww)=>{
      neww.status=New;
      return {...neww}
    })
  }
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">{params.id}</h1>

        <div className=" mb-2 mb-md-0">
          <div className="d-flex align-items-center ms-3 ms-lg-4">

          </div>
          <div className="d-flex align-items-center ms-3 ms-lg-4">

          </div>
        </div>

        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">

            <button type="button" className={`btn btn-sm btn-outline-secondary ${task.status=="In Progress" && "active"}`} onClick={()=>changeStatus("In Progress")} >In Progress</button>
            <button type="button" className={`btn btn-sm btn-outline-secondary ${task.status=="Completed" && "active"}` } onClick={()=>changeStatus("Completed")}>Completed</button>
            <button type="button" className={`btn btn-sm btn-outline-secondary ${task.status=="Waiting" && "active"}`} onClick={()=>changeStatus("Waiting")}>Waiting</button>
            <button type="button" className={`btn btn-sm btn-outline-secondary ${task.status=="Canceled" && "active"}`} onClick={()=>changeStatus("Canceled")}>Canceled</button>
          </div>
          <button type="button" className="btn btn-light-main btn">
            <FontAwesomeIcon icon={faEdit}/> Edit
          </button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <img src={logo} className="img-fluid rounded de-img" />
        </div>
        <div className="col-md-6  mt-5">
          <div className=" mb-3">
            <span data-feather="bookmark" className="main-color"></span> <strong>Task Name:</strong> {task.name}
          </div>
          <div className="">
            <span data-feather="calendar" className="main-color"></span> <strong>StartDate:</strong> {task.startDate}
          </div>
          <br />
          <div className="">
            <span data-feather="calendar" className="main-color"></span> <strong>EndDate:</strong> {task.endDate}
          </div>
        </div>


        <div className="row mt-5">
          <div className="task-info">
            <strong>Task Details</strong>
            <br />
            <p>
              <i>{task.detail}</i>
              <br />
              he standard Lorem Ipsum passage, used since the 1500s
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

    </main>
  )
}

export default Detail
