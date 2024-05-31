
import './login_screen.css';
import user_data from '../user_info.json';

const Verify_user = () => {
  
  var email=document.getElementById("email").value;
  var password=document.getElementById("password").value;
  var i = 0
  while (i < user_data.length){
    if (user_data[i].email === email){
      if (user_data[i].password === password){
        console.log('match')
      }
    }
    i+=1;
  }
}

function login_screen() {
  return (
    <body>
      <div class="container d-flex justify-content-center align-items-center vh-100">
        <div class="row border rounded-1 p-3 bg-white shadow box-area">
          <div class="col-md-6 d-flex justify-content-center align-items-center flex-column left-box">
            <div class="featured-image mb-3">
              <img src="youtube.png" class="img-fluid p-5" alt="Responsive image"></img>
            </div>
          </div>

          <div class="col-md-6 right-box">
            <div class="row align-items-center">
              <div class="header-text mb-4">
                <h1>Hello</h1>
                <t>please varify yourself</t>
              </div>
              <div class="input-group mb-3">
                <input type="text" class="form-control form-control-lg bg-light fs-6" id="email" placeholder="Email address"></input>
                <div class="invalid-feedback">
                  missing username.
                </div>
              </div>
              <div class="input-group mb-1">
                <input type="password" class="form-control form-control-lg bg-light fs-6" id="password" placeholder="Password"></input>
                <div class="invalid-feedback">
                  missing password.
                </div>
              </div>
              <div class="input-group mb-3 pt-5">
                <button class="btn btn-lg btn-primary w-100 fs-6" onClick={Verify_user} type="submit">Login</button>
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

      <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    </body>

  );
}

export default login_screen;
