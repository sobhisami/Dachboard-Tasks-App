import { faFacebookF, faGithub, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Social = () => {
  return (
    <>
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
    </>
  )
}

export default Social
