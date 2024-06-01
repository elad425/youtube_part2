
import './login_screen.css';
import user_data from '../user_info.json';

const Verify_user = () => {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  const forms = document.querySelectorAll('.needs-validation')

  forms.forEach(form => {
    form.classList.remove('is-valid')
    form.classList.add('is-invalid')
  })

  var i = 0
  while (i < user_data.length) {
    if (user_data[i].email === email) {
      if (user_data[i].password === password) {
        forms.forEach(form => {
          form.classList.remove('is-invalid')
          form.classList.add('is-valid')
        })
      }
    }
    i += 1;
  }
}

function login_screen() {
  return (
    <body>
      <div class="container d-flex justify-content-center align-items-center vh-100">
        <div class="row border rounded-1 p-3 bg-light shadow box-area">
          <div class="col-md-6 d-flex justify-content-center align-items-center flex-column left-box">
            <div class="featured-image mb-3">
              <img src="youtube.png" class="img-fluid p-3" alt="Responsive image"></img>
            </div>
          </div>
          <div class="col-md-6 right-box">
            <div class="row align-items-center">
              <div class="header-text mb-4">
                <h1>Hello</h1>
                <t>please varify yourself</t>
              </div>
              <div class="input-group mb-3">
                <input type="text" class="form-control needs-validation form-control-lg bg-light fs-6" id="email" placeholder="Email address" ></input>
                <div class="invalid-feedback needs-validation">
                  wrong email address.
                </div>
              </div>
              <div class="input-group mb-1">
                <input type="password" class="form-control needs-validation form-control-lg bg-light fs-6" id="password" placeholder="Password" ></input>
                <div class="invalid-feedback">
                  wrong password.
                </div>
              </div>
              <div class="input-group mb-3 pt-5">
                <button class="btn btn-lg btn-primary w-100" onClick={Verify_user} type='submit'>Login</button>
              </div>
              <div class="row">
                <div class="col">
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

 
