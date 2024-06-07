import './login_screen.css';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Login_screen({ usersList, setUser, user,setIsUserLoggedIn }) {
  const navigate = useNavigate();
  const Verify_user = () => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    document.getElementById('email').classList.add('is-invalid')
    document.getElementById('password').classList.add('is-invalid')

    for (const List_user of usersList) {
      if (List_user.email === email) {
        if (List_user.password === password) {
          document.getElementById('email').classList.remove('is-invalid')
          document.getElementById('password').classList.remove('is-invalid')
          document.getElementById('email').classList.add('is-valid')
          document.getElementById('password').classList.add('is-valid')
          setUser([user, List_user])
          setIsUserLoggedIn(true)
          setTimeout(() => {
            navigate('/');
          },700);
          break
        }
      }
    }
  }

  return (
<div className="login">
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row border rounded-2 p-2 bg-light shadow box-area">
        <div className="col-md-6 d-flex justify-content-center align-items-center flex-column left-box">
          <div className="featured-image mb-3">
            <img src="youtube.png" className="img-fluid p-4" alt="Responsive image"></img>
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
            <div className="input-group mb-2 pt-4">
              <button className="btn btn-lg btn-primary w-100 submit-btn" onClick={Verify_user} type='submit'>Login</button>
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
    </div>
  );
}

export default Login_screen;
