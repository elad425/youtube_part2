import './signup_screen.css';
import Signup_input from '../components/signup_input/signup_input';
import { Link } from 'react-router-dom'

function Signup_screen({ usersList, setUserList }) {

    const signup_user = () => {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var con_password = document.getElementById("con_password").value;
        var user_name = document.getElementById("user_name").value;
        const regex = /^(?=.*[A-Za-z])(?=.*\d)/;
        var valid = 1

        //checks if name not empty
        if (user_name === '') {
            document.getElementById('user_name').classList.add('is-invalid')
            valid = 0
        } else {
            document.getElementById('user_name').classList.remove('is-invalid')
        }

        // check if email already exists
        for (const user of usersList) {
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
            setUserList([...usersList, data])
        }
    }
    return (

        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="row border rounded-1 p-3 bg-light shadow box-area">
                <div className="col-md-12">
                    <div className="row align-items-center">
                        <div className="header-text mb-4">
                            <div className="featured-image mb-3">
                                <img src="youtube_text.png" className="img-fluid ml-2 costume" alt="Responsive image"></img>
                            </div>
                            <a>please fill the required fields</a>
                        </div>

                        <Signup_input id="user_name" placeholder="user name" invalid="please enter user name" type="text" />
                        <Signup_input id="email" placeholder="Email adress" invalid="invalid email adress or email already exists" type="text" />
                        <Signup_input id="password" placeholder="Password" invalid="password need to contain at least 8 characters with letters and numbers" type="password" />
                        <Signup_input id="con_password" placeholder="Password" invalid="password doesnt match" type="password" />

                        <div className="input-group mt-3 mb-3">
                            <button className="btn btn-lg btn-primary w-100" onClick={signup_user} type='submit'>Sign up</button>
                        </div>
                        <div className="row">
                            <div className="col">
                                <small>already have an account? <Link to="/login">Log in</Link></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Signup_screen;
