import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { NavLink, useParams } from "react-router-dom"
import { Context } from "../../Context/Context"
import Swal from "sweetalert2"
import Edit from "../Edit/Edit"
const Card = ({ data, Deleted,updateItem }) => {
  let context = useContext(Context)
  let onDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Deleted(data.id)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  return (
    <div className="col-md-4">
      <div className="card task card">
        <img src={data.file} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted"> <span data-feather="calendar"></span> {data.startDate} <span className="main-color">To </span> {data.endDate}</h6>
          <p className="card-text">{data.detail}</p>
          <hr />
          <span className="btn badge-light-warning Waiting">{data.status}</span>
          <NavLink  to={`./detail/${data.id}`} className="btn btn-bg-gray pull-right">
            <FontAwesomeIcon icon={faArrowRight} />
          </NavLink>
          <span className="btn btn-bg-gray pull-right p-0 mx-1">
            <Edit data={data} updateItem={updateItem}/>
          </span>
          <span className="btn btn-bg-gray pull-right" onClick={onDelete}>
            <FontAwesomeIcon icon={faTrashCan} />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card
