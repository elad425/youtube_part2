import './video_watch.css';
import React, { useEffect, useState } from 'react';
import Under_video_section from '../under-video-bar/under-video-bar';
import Video_side_bar from '../video_side_bar/video_side_bar';
import Comment_box from '../comment_box/comment_box';

function Video_watch({ id, title, description, channel, views, date, thumbnail, channel_icon, video, videoList, toggleVideoView,user }) {
    const [videoCommentsList, setVideoCommentsList] = useState([]);
    const [videoDetails, setVideoDetails] = useState(null);

    useEffect(() => {
        const video = videoList.find(v => v.id === id);
        setVideoDetails(video);
        setVideoCommentsList(video ? video.comments || [] : []);
    }, [id, videoList]);

    const addComment = (commentContent1, commentChannel1, commentChannel_icon1, commentDate1) => {
        if (videoDetails) {
            const updatedComments = [...videoDetails.comments, commentContent1];
            const updatedCommentsChannel = [...videoDetails.comments_channel, commentChannel1];
            const updatedCommentsChannelIcon = [...videoDetails.comments_channel_icon, commentChannel_icon1];
            const updatedCommentsDate = [...videoDetails.comments_date, commentDate1];

            videoDetails.comments = updatedComments;
            videoDetails.comments_channel = updatedCommentsChannel;
            videoDetails.comments_channel_icon = updatedCommentsChannelIcon;
            videoDetails.comments_date = updatedCommentsDate;

            setVideoCommentsList(updatedComments);
        }
    };
    const editComment = (index, newComment) => {
        if (videoDetails) {
            const updatedComments = [...videoDetails.comments];
            updatedComments[index] = newComment;

            videoDetails.comments = updatedComments;
            setVideoCommentsList(updatedComments);
        }
    };
    const deleteComment = (index) => {
        if (videoDetails) {
            const updatedComments = [...videoDetails.comments];
            const updatedCommentsChannel = [...videoDetails.comments_channel];
            const updatedCommentsChannelIcon = [...videoDetails.comments_channel_icon];
            const updatedCommentsDate = [...videoDetails.comments_date];

            updatedComments.splice(index, 1);
            updatedCommentsChannel.splice(index, 1);
            updatedCommentsChannelIcon.splice(index, 1);
            updatedCommentsDate.splice(index, 1);

            videoDetails.comments = updatedComments;
            videoDetails.comments_channel = updatedCommentsChannel;
            videoDetails.comments_channel_icon = updatedCommentsChannelIcon;
            videoDetails.comments_date = updatedCommentsDate;

            setVideoCommentsList(updatedComments);
        }
    };
    const resetComments =(title3,description3,channel3,views3,date3,thumbnail3,channel_icon3,video3) =>{
        setVideoCommentsList([]);
        toggleVideoView(title3,description3,channel3,views3,date3,thumbnail3,channel_icon3,video3);
    }
    if (!videoDetails) return null;

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
                    <Under_video_section
                        description={description}
                        channel={channel}
                        views={views}
                        date={date}
                        channel_icon={channel_icon}
                        addComment={addComment} 
                        user={user}/>
                </div>
                <div className="comments-container">
                    {videoCommentsList.map((comment, index) => (
                        <Comment_box
                            key={index}
                            index={index}
                            comment={comment}
                            channel={videoDetails.comments_channel[index]}
                            channel_icon={videoDetails.comments_channel_icon[index]}
                            date={videoDetails.comments_date[index]}
                            editComment={editComment}
                            deleteComment={deleteComment}
                        />
                    ))}
                </div>
            </div>
            <div className="video-side-bar">
                <Video_side_bar videoList={videoList} toggleVideoView={resetComments} />
            </div>
        </div>
    );
}

export default Video_watch;
