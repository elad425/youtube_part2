
import './like_dislike_buttons.css'
import { ReactComponent as Like_icon } from './like-icon.svg'
import { ReactComponent as Dislike_icon } from './dislike-icon.svg'
import React, {  useState } from 'react';
function Like_dislike_buttons() {

    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };
    return (
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
    );
}
export default Like_dislike_buttons