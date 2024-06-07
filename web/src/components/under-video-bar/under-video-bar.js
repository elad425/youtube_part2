import './under-video-bar.css'
import Share_button from '../share-button/share-button'
import Like_dislike_buttons from '../like_dislike_buttons/like_dislike_buttons';
import React, { useEffect, useState } from 'react';
import Add_comment_box from '../add_comment_box/add_comment_box';
function Under_video_bar({ description, channel, views, date, channel_icon,addComment,user}) {
    console.log("agadgadgdga")
    console.log(user)
    let source =''
    if (user!=null&&user[1].picture instanceof Blob) {
        source = URL.createObjectURL(user[1].picture);
    } else {
        source = 'youtube_text.png'; // Provide a default image path
    }
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

                <Like_dislike_buttons/>

                <Share_button/>
            </div>
            <div className="under-video-details-container">
                <div className="views-date-container">
                    <span className='views-under-span'>{views} views</span>
                    <span>{date}</span>
                </div>
                <div className="description-container">
                    <p className='under-video-desc'>{description}</p>
                </div>
               
            </div>
            <span className="comments-title">Comments</span>
            <Add_comment_box channel={channel} channel_icon={source} addComment={addComment} user={user}></Add_comment_box>
            
        </div>
    );
}
export default Under_video_bar