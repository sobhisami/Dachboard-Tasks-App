import { useContext, useRef, useState } from "react";
import {Context} from '../../Context/Context'
import Swal from "sweetalert2";
const AddTasks = () => {
    const [file, setFile] = useState("");
    const [name,setName]=useState("");
    const [detail,setDetail]=useState(""); 
    const [startDate,setStartDate]=useState(""); 
    const [endDate,setEndDate]=useState("");
    const fileInputRef = useRef(null);
    let context=useContext(Context);
    let id =Math.floor(Math.random() * 100) + 1;
    let status="Waiting"
    let Data={id,name,detail,startDate,endDate,file,status}
    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      if(check()){
        context.setItems([...context.items,Data])
        emptyData();
      console.log(Data);
      }
    };
    let emptyData=()=>{
      setName("")
      setDetail("")
      setStartDate("")
      setEndDate("")
      setFile("")
      fileInputRef.current.value = null;
    }
    let check=()=>{
      if (name!=="" && file!=="" && detail!=="" && startDate!=="" && endDate!=="") {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
        return true
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please Enter All Data!',
        })
        return false
      }
    }
  return (
    <>
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 className="h2 mt-3">Add New Task </h1>
    </div>
    <form className="row mt-5">
        <div className="col-md-12">
          <div className="form-outline mb-4">
            <label  htmlFor="validationServer01" className="form-label">Task name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  id="validationServer01"  className="form-control " placeholder="Task name"/>
          </div>
        </div>
        <div className="col-md-12">
        <div className="form-outline mb-4">
              <label className="form-label">Image For Task</label>
              <input
                className="form-control"
                type="file"
                id="formFile"
                onChange={handleChange}
                ref={fileInputRef}
              />
        </div>
        </div>
        <div className="col-md-12">
              <label  className="form-label">Task Details</label>
          <div className="form-outline mb-4">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={detail} onChange={(e)=>setDetail(e.target.value)}></textarea>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-outline mb-4">
            <label  className="form-label">Start date</label>
            <input type="date"  className="form-control" value={startDate} onChange={(e)=>setStartDate(e.target.value)} placeholder="Start Date"/>
          </div>
        </div>
        <div className="col-md-6">
          <label  className="form-label">End date</label>
          <div className="form-outline mb-4">
            <input type="date" value={endDate} onChange={(e)=>setEndDate(e.target.value)} className="form-control" placeholder="End date"/>
          </div>
        </div>
    </form>
    <div>
      <button type="submit" className="pull-right btn btn-main mb-4" onClick={handleSubmit}>Add New Task</button>
    </div>
    </main>
    </>
  )
}

export default AddTasks
