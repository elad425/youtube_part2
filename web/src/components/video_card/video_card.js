import './video_card.css'
import React, { useEffect, useState } from 'react';

function Video_card({ id, title, description,channel, views, date, thumbnail, channel_icon,video,isLocal,toggleView }) {
    const [videoState,setVideoState]=useState(null);
   
    const switchView = () =>{
        toggleView(id,title,description,channel,views,date,thumbnail,channel_icon,video,true);


    }
    return (
        <div className="video-card-container" onClick={switchView} >
            <a href="#" className="thumbnail">
                <img className="thumbnail-image" src={thumbnail} />
            </a>
            <div className="video-container">
                     <video className="video-file" controls>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
            </div>
            <div className="video-bottom-section">
                <a href="#" className="icon-container">
                    <img className="channel-icon" src={channel_icon} />
                </a>
                <div className="video-details">
                    <a href="#" className="video-title">{title}</a>
                    <a href="#" className="video-channel-name">{channel}</a>
                    <div className="video-metadata">
                        <span className="views">{views}</span>
                        •
                        <span className="date">{date}</span>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Video_card