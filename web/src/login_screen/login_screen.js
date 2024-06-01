
import './login_screen.css';
import user_data from '../user_info.json';

const Verify_user = () => {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  const forms = document.querySelectorAll('.needs-validation')

  forms.forEach(form => {
    form.classNameList.remove('is-valid')
    form.classNameList.add('is-invalid')
  })

  var i = 0
  while (i < user_data.length) {
    if (user_data[i].email === email) {
      if (user_data[i].password === password) {
        forms.forEach(form => {
          form.classNameList.remove('is-invalid')
          form.classNameList.add('is-valid')
        })
      }
    }
    i += 1;
  }
}

function login_screen() {
  return (
    <body>
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
                <t>please varify yourself</t>
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
                  <small>Don't have account? <a href="#">Sign Up</a></small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default login_screen;
