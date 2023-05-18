import { Button, Input, Social } from "../../Componants"

const Login = () => {

  return (
    <div className="tab-pane  fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
      <form>
        <div className="text-center mb-3">
          <h4 className="mb-4 mt-5">Login To Sobhi Task System With</h4>
          <Social />
        </div>

        <h4 className="mb-5 mt-2 text-center">or</h4>

        <div className="form-outline mb-4">
          <Input  type="email" id="loginName"  placeholder="Email" />
        </div>

        <div className="form-outline mb-4">
          <Input type="password" id="loginPassword"  placeholder="Password" />
        </div>

        <div className="row mb-4">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="form-check mb-3 mb-md-0">
              <input className="form-check-input" type="checkbox" value="" id="loginCheck" />
              <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center">
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        <Button> Sign in </Button>
        <div className="text-center">
          <p>Not a member? <a href="#!">Register</a></p>
        </div>
      </form>
    </div>
  )
}

export default Login
