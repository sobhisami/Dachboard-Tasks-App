const NavLogin = () => {
  return (
    <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active" id="tab-login" data-bs-toggle="pill" href="#pills-login" role="tab"
                    aria-controls="pills-login" aria-selected="true">Login</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="tab-register" data-bs-toggle="pill" href="#pills-register" role="tab"
                    aria-controls="pills-register" aria-selected="false">Register</a>
                </li>
              </ul>
  )
}

export default NavLogin
