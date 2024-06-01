import './signup_screen.css';
import user_data from '../user_info.json';

const signup_user = () => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var con_password = document.getElementById("con_password").value;
    var user_name = document.getElementById("user_name").value;
    const regex = /^(?=.*[A-Za-z])(?=.*\d)/;
    var valid = 1

    if (user_name === ''){
        document.getElementById('user_name').classList.add('is-invalid')
        valid = 0
    } else {
        document.getElementById('user_name').classList.remove('is-invalid')
    }

    // check if email already exists
    for (const user of user_data) {
        if (user.email === email || email === '') {
            document.getElementById('email').classList.add('is-invalid')
            valid = 0
            break
        } else {
            document.getElementById('email').classList.remove('is-invalid')
        }
    }

    // check if password contain 8 characters with letters and numbers
    if (!regex.test(password) || password.length < 8) {
        document.getElementById('password').classList.add('is-invalid')
        valid = 0
    } else {
        document.getElementById('password').classList.remove('is-invalid')
        // checks if both passwords are equal
        if (password != con_password) {
            document.getElementById('con_password').classList.add('is-invalid')
            valid = 0
        } else {
            document.getElementById('con_password').classList.remove('is-invalid')
        }
    }

    // if user info is valid create a new user
    if (valid) {
        const forms = document.querySelectorAll('.needs-validation')
        const data = {
            user_name: user_name,
            email: email,
            password: password
        }
        forms.forEach(form => {
            form.classList.remove('is-invalid')
            form.classList.add('is-valid')
        })
        user_data.push(data)
    }
}

function Signup_screen() {
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
                                <h1>Sign up!</h1>
                                <t>please fill the required fields</t>
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control needs-validation form-control-lg bg-light fs-6" id="user_name" placeholder="User name" ></input>
                                <div class="invalid-feedback">
                                    please enter user name
                                </div>
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control needs-validation form-control-lg bg-light fs-6" id="email" placeholder="Email address" ></input>
                                <div class="invalid-feedback">
                                    invalid email adress or email already exists
                                </div>
                            </div>
                            <div class="input-group mb-3">
                                <input type="password" class="form-control needs-validation form-control-lg bg-light fs-6" id="password" placeholder="Password" ></input>
                                <div class="invalid-feedback">
                                    password need to contain at least 8 characters with letters and numbers
                                </div>
                            </div>
                            <div class="input-group mb-5">
                                <input type="password" class="form-control needs-validation form-control-lg bg-light fs-6" id="con_password" placeholder="cofirm password" ></input>
                                <div class="invalid-feedback">
                                    password doesnt match
                                </div>
                            </div>

                            <div class="input-group mb-3">
                                <button class="btn btn-lg btn-primary w-100" onClick={signup_user} type='submit'>Sign up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Signup_screen;
