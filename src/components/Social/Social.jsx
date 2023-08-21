import { faFacebookF, faGithub, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Social = ({children}) => {
  return (
    <div className="text-center mb-3">
    <h4 className="mb-4 mt-5">{children}</h4>
    <button type="button" className="btn btn-link btn-floating mx-1">
      <FontAwesomeIcon icon={faFacebookF}/>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <FontAwesomeIcon icon={faGoogle}/>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <FontAwesomeIcon icon={faTwitter}/>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <FontAwesomeIcon icon={faGithub}/>
    </button>
  </div>
  )
}

export default Social
