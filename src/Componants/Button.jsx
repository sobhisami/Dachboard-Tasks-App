import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../Context/Auth";
import Swal from "sweetalert2";

const Button = ({rest,children}) => {
  let Context =useContext(Auth)
  let Navigate=useNavigate(); 
  let onClickHandle=()=>{
  Navigate("/dachborad/tasks");
     Context.updateLogin(true);
     Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Welcome',
      showConfirmButton: false,
      timer: 800
    })
     
  }
  return (
    <button onClick={onClickHandle} type="submit" className="btn btn-main btn-block mb-3" {...rest}>{children}</button>
  )
}

export default Button
