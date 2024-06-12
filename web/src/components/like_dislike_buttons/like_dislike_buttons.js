import './like_dislike_buttons.css';
import { ReactComponent as Like_icon } from './like-icon.svg';
import { ReactComponent as Dislike_icon } from './dislike-icon.svg';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Like_dislike_buttons({ likedBy, changeLikedBy,isUserConnected }) {
    const [activeButton, setActiveButton] = useState(null);

    useEffect(() => {
        if (likedBy === 1) {
            setActiveButton('like');
        } else if (likedBy === 2) {
            setActiveButton('dislike');
        } else {
            setActiveButton(null);
        }
    }, [likedBy]);

    const handleButtonClick = (buttonType) => {
        if (activeButton === buttonType) {
            setActiveButton(null);
            changeLikedBy(0);
        } else {
            setActiveButton(buttonType);
            changeLikedBy(buttonType === 'like' ? 1 : 2);
        }
    };
    const likeDislike_content=(

        <div className="btn-group" role="group" aria-label="Basic outlined example">
        <button
            className={`btn btn-outline-primary under-btn ${activeButton === 'like' ? 'active-btn' : ''}`}
            id="like"
            onClick={() => handleButtonClick('like')}
        >
            <Like_icon />
        </button>
        <button
            className={`btn btn-outline-primary under-btn ${activeButton === 'dislike' ? 'active-btn' : ''}`}
            onClick={() => handleButtonClick('dislike')}
        >
            <Dislike_icon />
        </button>
    </div>

    )

    return isUserConnected ? (
        likeDislike_content
    ) : (
        <Link to="/signup" className="no-style-link">
            {likeDislike_content}
        </Link>
    );
}

export default Like_dislike_buttons;
