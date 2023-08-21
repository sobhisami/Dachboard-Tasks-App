import { faBookmark, faCalendar } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useCallback, useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"
import { Context } from "../../Context/Context";

const Details = () => {
  
  let params = useParams();
  let context = useContext(Context);
  let [dataNew, setDataNew] = useState({})
  let fetchData = () => {
    let tasks = context.items.find(e => e.id == params.id)
    setDataNew(tasks)
  }
  useEffect(() => {
    fetchData();
  }, [])

  let changeStatus = (New) => {
    setDataNew((statusNew) => {
      statusNew.status = New;
      return { ...statusNew }
    })
  }
  // let updateItem = (id, DataUpdate) => {
  //   setDataNew((prevData) => ({
  //     ...prevData,
  //     ...DataUpdate
  //   }));
  // };
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Title Task: {dataNew.name} </h1>
        <div className=" mb-2 mb-md-0">
          <div className="d-flex align-items-center ms-3 ms-lg-4">
          </div>
          <div className="d-flex align-items-center ms-3 ms-lg-4">
          </div>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className={` btn btn-sm btn-outline-secondary ${dataNew.status == "In Progress" && "active"}`} onClick={() => changeStatus("In Progress")}>In progress</button>
            <button type="button" className="btn btn-sm btn-outline-secondary active" onClick={() => changeStatus("Completed")} className={` btn btn-sm btn-outline-secondary ${dataNew.status == "Completed" && "active"}`}>Completed</button>
            <button type="button" onClick={() => changeStatus("Waiting")} className={` btn btn-sm btn-outline-secondary ${dataNew.status == "Waiting" && "active"}`}>Waiting</button>
            <button type="button" onClick={() => changeStatus("Canceled")} className={` btn btn-sm btn-outline-secondary ${dataNew.status == "Canceled" && "active"}`}>Canceled</button>
          </div>
          {/* <button type="button" className="btn btn-light-main btn">
            <span data-feather="edit-3"><Edit dataNew={dataNew} updateItem={updateItem}/> </span>  
          </button> */}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <img src={dataNew.file} className="img-fluid rounded de-img" />
        </div>
        <div className="col-md-6  mt-5">
          <div className=" mb-3">
            <FontAwesomeIcon icon={faBookmark} className="mx-1" /> <strong>Title:</strong> {dataNew.name}
          </div>
          <div className="mb-3">
            <FontAwesomeIcon icon={faCalendar} className="mx-1" /> <strong>start Date :</strong>{dataNew.startDate}
          </div>
          <div className="mb-3">
            <FontAwesomeIcon icon={faCalendar} className="mx-1" /> <strong>End Date :</strong>{dataNew.endDate}
          </div>
        </div>
        <div className="row mt-5">
          <div className="task-info">
            <strong>Description Task</strong>
            <p>
             {dataNew.detail}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Details
