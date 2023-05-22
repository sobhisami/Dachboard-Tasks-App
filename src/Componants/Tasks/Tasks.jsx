import Task from "./Task"
import logo from "../../Resources/img/1.png"
import { useContext, useState } from "react"
import { Opration } from "../../Context/Opration"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Swal from "sweetalert2"
const Tasks = () => {
  let context = useContext(Opration)
  let [search,setSearch]=useState("")
  let [filter,setFilter] = useState(context.data);
  let filterdData =(event)=>{
    if (event.target.value!="All" && event.target.value!="Filter By status") {
      let filt=context.data.filter(e=>e.status==event.target.value);
      setFilter(filt)
    } else {
      setFilter(context.data)
    }
  }
  let Deleted=(id)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't deleted this item!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        let filterData=filter.filter(e=> e.id!=id)
        setFilter(filterData);
        context.setData(filterData);
      }
    })
  }
   let datalist= search ? context.data.filter(e=> e.name.toLowerCase().includes(search.toLowerCase())) : filter
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
        <span className='search'>
         <input   type="text" placeholder="Search By Name" value={search} onChange={(e) => setSearch(e.target.value)}/>
              < FontAwesomeIcon icon={faSearch} className="icon-search"/>
        </span>
        <ul className="list-inline">
          <li className="list-inline-item">
           <select onChange={filterdData} className=" dropdown form-control pull-right" placeholder="Filter By status" autoComplete="off">
            <option value="Filter By status" >Filter By status</option>
            <option value="All">All</option>
            <option value="Waiting">Waiting</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Canceled">Canceled</option>
          </select>
          </li>
        </ul>
      </div>
      <div className="row mt-5">

       {datalist.map(e=>  <Task Deleted={Deleted} src={logo} key={e.id} data={e} />)}
      </div>
    </main>
  )
}

export default Tasks
