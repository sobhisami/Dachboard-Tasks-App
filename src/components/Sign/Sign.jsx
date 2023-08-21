import { NavLink, useNavigate } from "react-router-dom";
import Social from "../Social/Social"
import Register from "../Register/Register";
import { Auth } from "../../Context/Auth";
import { useContext } from "react";
const Sign = () => {
  let AuthContext=useContext(Auth)
  let Navigate=useNavigate()
  let loginHandler=(e)=>{
    e.preventDefault()
    Navigate("/dashboard/home")
    AuthContext.updateLogin(true)
    AuthContext.token=""
  }
  return (
    <div className="tab-pane  fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
      <form onSubmit={loginHandler}>
        <Social>
          Login To Sobhi Task System With
        </Social>
        <h4 className="mb-5 mt-2 text-center">or</h4>
        <div className="form-outline mb-4">
          <input type="email" id="loginName" className="form-control"  placeholder="Email or username" />
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="loginPassword" className="form-control" placeholder="Password" />
        </div>

        <div className="row mb-4">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="form-check mb-3 mb-md-0">
              <input className="form-check-input" type="checkbox" value="" id="loginCheck"  />
              <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button type="submit" className="btn btn-main btn-block mb-4" onClick={loginHandler} >Sign in</button>

        <div className="text-center">
          <p>Not a member? <a className="btn rounded bg-success-subtle">Register</a></p>
        </div>
      </form>
    </div>
  )
}

export default Sign
