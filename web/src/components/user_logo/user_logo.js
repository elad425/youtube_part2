import './user_logo.css'
import React, { useEffect, useState } from 'react';

function User_logo({ user}) {
    const source =URL.createObjectURL(user.user[1].picture)
    return (
        <div className='user-logo-container' >
            <img src={source} className='user-logo-image'></img>
            <span>{user.user[1].user_name}</span>
        </div>

    );
}
export default User_logo