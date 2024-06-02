import './login_screen.css';
import {Link} from 'react-router-dom'

function login_screen({usersList}) {

  const Verify_user = () => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    for (const user of usersList) {
      if (user.email === email) {
        if (user.password === password) {
          document.getElementById('email').classList.remove('is-invalid')
          document.getElementById('password').classList.remove('is-invalid')
          document.getElementById('email').classList.add('is-valid')
          document.getElementById('password').classList.add('is-valid')
          
        }else {
          document.getElementById('email').classList.remove('is-valid')
          document.getElementById('password').classList.remove('is-valid')
          document.getElementById('email').classList.add('is-invalid')
          document.getElementById('password').classList.add('is-invalid')
      } 
      }
    }
    console.log(usersList)
  }

  return (
    
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="row border rounded-1 p-3 bg-light shadow box-area">
          <div className="col-md-6 d-flex justify-content-center align-items-center flex-column left-box">
            <div className="featured-image mb-3">
              <img src="youtube.png" className="img-fluid p-3" alt="Responsive image"></img>
            </div>
          </div>
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h1>Hello</h1>
                <a>please verify yourself</a>
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control needs-validation form-control-lg bg-light fs-6" id="email" placeholder="Email address" ></input>
              </div>
              <div className="input-group mb-1">
                <input type="password" className="form-control needs-validation form-control-lg bg-light fs-6" id="password" placeholder="Password" ></input>
                <div className="invalid-feedback">
                  wrong email or password.
                </div>
              </div>
              <div className="input-group mb-3 pt-5">
                <button className="btn btn-lg btn-primary w-100" onClick={Verify_user} type='submit'>Login</button>
              </div>
              <div className="row">
                <div className="col">
                  <small>Don't have an account? <Link to="/signup">Sign up</Link></small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default login_screen;
