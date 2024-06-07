import './user_logo.css';
import React from 'react';

function User_logo({ user }) {
    
    let source = '';
    if (user[1].picture instanceof Blob) {
        source = URL.createObjectURL(user[1].picture);
    } else {
        source = 'youtube_text.png'; // Provide a default image path
    }

    return (
        <div className='user-logo-container'>
            <img src={source} className='user-logo-image' alt="User Profile"></img>
            <span>{user[1].user_name}</span>
        </div>
    );
}

export default User_logo;
