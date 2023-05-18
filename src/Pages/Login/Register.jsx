import { Button, Input, Social } from "../../Componants"

const Register = () => {
  
  return (
    <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
    <form>
      <div className="text-center mb-3">
        <h4 className="mb-4 mt-5">Register in Momen Task System  with</h4>
      <Social/>
      </div>

      <h4 className="mb-4 mt-5 text-center">or:</h4>
      <div className="form-outline mb-4">
        <Input type="email" id="registerEmail"  placeholder="Email"/>
      </div>

      <div className="form-outline mb-4">
        <Input type="password" id="registerPassword"  placeholder="password" />
      </div>

      <div className="form-outline mb-4">
        <Input type="password" id="registerRepeatPassword"  placeholder="repeat password" />
      </div>

      <div className="form-check d-flex justify-content-center mb-4">
        <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" 
          aria-describedby="registerCheckHelpText" />
        <label className="form-check-label" htmlFor="registerCheck">
          I have read and agree to the terms
        </label>
      </div>
     <Button> Sign in </Button>
    </form>
  </div>
  )
}

export default Register
