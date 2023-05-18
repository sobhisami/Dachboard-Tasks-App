import { Login, NavLogin, Register } from '../../Componants';

const LoginHome = () => {
  return (
    <>
      <div className="container-fluid p-5 bg-primary text-white text-center login-cover">
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <div className="shadow-5-strong form-box">
              <NavLogin />
              <div className="tab-content">
                <Login />
                <Register />
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    </>
  )
}

export default LoginHome
