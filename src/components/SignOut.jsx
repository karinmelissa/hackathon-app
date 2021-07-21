import { Button } from 'react-bootstrap';
import { auth } from '../firebaseConfig';
import logo from '../img/logo.png';
import { useHistory } from "react-router-dom";

const SignOut = () => {
  let history = useHistory();
  return (
    <>
      <div className="container" >
        <div>
          <img src={logo} className="logo-sgn-up" alt="" />
        </div>
        <Button variant="primary" type="submit" className="login-btn" id="login-btn" onClick={() => {
          auth.signOut().then(() => { 
            history.push('/')
          }).catch((error) => {
            // An error happened.
          });
        }
        }> Log out
        </Button>
      </div>
    </>
  )
}


export default SignOut;
