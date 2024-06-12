import './signup_screen.css';
import Signup_input from '../components/signup_input/signup_input';

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Signup_screen({ usersList, setUserList,setIsUserLoggedIn ,user,setUser}) {
    const [pictureFile,setPictureFile] = useState(null);
    const navigate = useNavigate();
    const handleUpload = (e)=>{
        setPictureFile(e.target.files[0])
    }
    const signup_user = () => {

        const forms = document.querySelectorAll('.needs-validation')
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var con_password = document.getElementById("con_password").value;
        var user_name = document.getElementById("user_name").value;
        var picture = document.getElementById("picture").value;
        const regex = /^(?=.*[A-Za-z])(?=.*\d)/;

        forms.forEach(form => {
            form.classList.remove('is-invalid')
        })

        //checks if the email already exist
        for (const List_user of usersList){
            if (List_user.email === email){
                document.getElementById('email').classList.add('is-invalid')
                break
            }
        }

        if (user_name === '') {
            document.getElementById('user_name').classList.add('is-invalid')
        } else if ( email === ''){
            document.getElementById('email').classList.add('is-invalid')
        } else if(!regex.test(password) || password.length < 8){
            document.getElementById('password').classList.add('is-invalid')
        } else if (password !== con_password){
            document.getElementById('con_password').classList.add('is-invalid')
        } else if (picture === ''){
            document.getElementById('picture').classList.add('is-invalid')
        } else{
            const data = {
                user_name: user_name,
                email: email,
                password: password,
                picture : pictureFile
            }
            forms.forEach(form => {
                form.classList.remove('is-invalid')
                form.classList.add('is-valid')
            })
            setUserList([...usersList, data])
            setUser([user, data])
            setTimeout(() => {
                navigate('/login');
            }, 700);
        }

    }
    return (
        <div className='signup'>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="row border rounded-1 p-3 bg-light shadow box-area">
                    <div className="col-md-12">
                        <div className="row align-items-center">
                            <div className="header-text mb-4">
                                <div className="featured-image mb-1">
                                    <img src="youtube_text.png" className="img-fluid ml-2 costume" alt="Responsive image"></img>
                                </div>
                                <a>please fill the following fields</a>
                            </div>
                            <Signup_input id="user_name" placeholder="User name" invalid="please enter user name" type="text" />
                            <Signup_input id="email" placeholder="Email adress" invalid="invalid email adress or email already exists" type="text" />
                            <Signup_input id="password" placeholder="Password" invalid="password need to contain at least 8 characters with letters and numbers" type="password" />
                            <Signup_input id="con_password" placeholder="Password" invalid="password doesnt match" type="password" />
                            <div className="mb-1">
                                <small className="">select profile picture</small>
                                <input class="form-control needs-validation form-control-lg bg-light fs-6" type="file" id="picture" onChange={handleUpload}></input>
                                <div className="invalid-feedback">
                                    missing picture
                                </div>
                            </div>
                            <div className="input-group mt-4 mb-2">

                                <button className="btn btn-lg btn-primary w-100 sign-up-btn" onClick={signup_user} type='submit'>Sign up</button>

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
        </div>

    );
}

export default Signup_screen;
