import { useContext, useState } from "react"
import Card from "./Card"
import { Context } from "../../Context/Context"
const HomeTasks = () => {
  let context = useContext(Context);
  let [search, setSearch] = useState("");
  let [filteredStatus, setFilteredStatus] = useState(context.items)
  let filterHandler = search ? context.items.filter(e => e.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) : filteredStatus;
  let filterStatus = (e) => {
    e.preventDefault()
    if (e.target.value != "All" && e.target.value != "Filter By status") {
      setFilteredStatus([...context.items].filter((item) => item["status"] === e.target.value))
    } else {
      setFilteredStatus(context.items)
    }
  }
  let Deleted = (id) => {
    let filterData = filteredStatus.filter(e => e.id != id)
    setFilteredStatus(filterData);
    context.setItems(filterData);
  }
  let updateItem=(id,DataUpdate)=>{
    let update=context.items.map(e=> e.id==id ? DataUpdate:e)
    context.setItems(update)
    let updates=filteredStatus.map(e=> e.id==id ? DataUpdate:e)
    setFilteredStatus(updates)
  }
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
        <div className=" mb-2 mb-md-0">
          <div className="d-flex align-items-center ms-3 ms-lg-4">
          </div>
          <div className="d-flex align-items-center ms-3 ms-lg-4"></div>
        </div>
        <ul className="list-inline d-flex justify-content-center">
          <li className="list-inline-item">
            <input className="form-control w-100" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name" aria-label="Search" />
          </li>
          <li className="list-inline-item ">
            <select className=" dropdown form-control pull-right" onChange={filterStatus} placeholder="Filter By status" autoComplete="off" >
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
        {filterHandler.map((e) => <Card key={e.id} data={e} Deleted={Deleted} updateItem={updateItem}/>)}
        {console.log(context.items)}
      </div>
    </main>
  )
}

export default HomeTasks
