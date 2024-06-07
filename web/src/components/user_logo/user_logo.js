import './user_logo.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function User_logo({ user,setUser,setIsUserLoggedIn}) {
    const navigate = useNavigate();
    let source = '';
    if (user[1].picture instanceof Blob) {
        source = URL.createObjectURL(user[1].picture);
    } else {
        source = 'youtube_text.png'; // Provide a default image path
    }
    const logOut = () => {
        setUser(null);
        setIsUserLoggedIn(false);
        navigate('/login');
    }

    return (
        <div className='user-logo-container'>
            <button className='user-logo-btn' data-bs-toggle="dropdown" aria-expanded="false">
                <img src={source} className='user-logo-image' alt="User Profile"></img>
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" onClick={logOut}>Log Out</a></li>
            </ul>
        </div>
    );
}

export default User_logo;
