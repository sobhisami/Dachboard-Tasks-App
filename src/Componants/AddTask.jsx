import { useContext, useState } from "react"
import Input from "./Input"
import { Opration } from "../Context/Opration";
import Swal from "sweetalert2";

const AddTask = () => {
  let context =useContext(Opration)
  let [name,setName] =useState("");
  let [image,setImage] =useState("");
  let [detail,setdDetail] =useState("");
  let [startDate,setStartDate] =useState("");
  let [endDate,setEndDate] =useState("");
  let [status,setstatus] =useState("Waiting");
  let onSubmit =(e)=>{
    e.preventDefault();
    if (cheak()) {
    context.setData([...context.data,Data]);
    }
    Empty();
  }
  let cheak=()=>{
    if (name !=""  &&  detail!="" && startDate !="" && endDate!="") {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Success Add ',
        showConfirmButton: true,
        timer: 700
      })
      return true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Enter Data!',
        
      })
      
      return false;
    }
  }
  let Empty=()=>{
    setName("");
    setImage("");
    setdDetail("");
    setStartDate("");
    setEndDate("");
  }
  const id = Math.floor(Math.random()*100);
  let Data={id,name,image,detail,startDate,endDate,status}
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2 mt-3">Add New Task </h1>
      </div>
      <form  onSubmit={onSubmit} className="row mt-5">
        <div className="col-md-12">
          <div className="form-outline mb-4">
            <label className="form-label">Task name</label>
            <input type="texy" id="loginName" className="form-control" placeholder="Task name" value={name} onChange={e=>setName(e.target.value)} />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-outline mb-4">
            <label className="form-label">Image For Task</label>
            <input className="form-control" type="file" id="formFile" value={image} onChange={e=>setImage(e.target.value)} />
          </div>
        </div>
        <div className="col-md-12">
          <label className="form-label">Task Details</label>
          <div className="form-outline mb-4">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={detail} onChange={e=>setdDetail(e.target.value)}></textarea>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-outline mb-4">
            <label className="form-label">Start date</label>
            <Input type="date" placeholder="Task name" value={startDate} onChange={e=>setStartDate(e.target.value)} />
          </div>
        </div>
        <div className="col-md-6">
          <label className="form-label">End date</label>
          <div className="form-outline mb-4">
            <Input type="date" placeholder="Task name" value={endDate} onChange={e=>setEndDate(e.target.value)}/>
          </div>
        </div>
        <div>
          <button type="submit" className="pull-right btn btn-main mb-4">Add New Task</button>
        </div>
      </form>
    </main>
  )
}

export default AddTask
