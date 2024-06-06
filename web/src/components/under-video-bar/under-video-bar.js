import './under-video-bar.css'
import { ReactComponent as Like_icon } from './like-icon.svg'
import { ReactComponent as Dislike_icon } from './dislike-icon.svg'
import Share_button from '../share-button/share-button'

import React, { useEffect, useState } from 'react';
function Video_watch({ description, channel, views, date, channel_icon }) {

    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };
    return (
        <div className="under-video-container">
            <div className="under-video-btn-container">
                <div className="channel-name-icon">
                    <a href="#" className="icon-container">
                        <img className="channel-icon" src={channel_icon} />
                    </a>
                    <span>{channel}</span>
                </div>

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

                <Share_button/>
            </div>
            <div className="under-video-details-container">
                <div className="views-date-container">
                    <span>{views} views</span>
                    <span>{date}</span>
                </div>
                <div className="description-container">
                    <p className='under-video-desc'>{description}</p>
                </div>
            </div>
        </div>
    );
}
export default Video_watch