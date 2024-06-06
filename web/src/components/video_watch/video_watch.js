import './video_watch.css'
import React, { useEffect, useState } from 'react';
import Under_video_section from '../under-video-bar/under-video-bar';
import Video_side_bar from '../video_side_bar/video_side_bar';

function Video_watch({ id, title, description, channel, views, date, thumbnail, channel_icon, video, videoList, toggleVideoView }) {
    return (
        <div className="video-watch-body">
            <div className="video-desc-comments-container">
                <div className="video-watch-container">
                    <video className="video-file" controls key={video}>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <span className='video-watch-title'>{title}</span>
                <div className="video-watch-btn-container">
                    <Under_video_section description={description} channel={channel} views={views} date={date} channel_icon={channel_icon} />
                </div>
                <div className="comments-container"></div>
            </div>
            <div className="video-side-bar">
                <Video_side_bar videoList={videoList} toggleVideoView={toggleVideoView} />
            </div>
        </div>
    );
}

export default Video_watch;