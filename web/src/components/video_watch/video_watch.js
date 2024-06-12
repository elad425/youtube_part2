import './video_watch.css';
import React, { useEffect, useState } from 'react';
import Under_video_section from '../under-video-bar/under-video-bar';
import Video_side_bar from '../video_side_bar/video_side_bar';
import Comment_box from '../comment_box/comment_box';

function Video_watch({ id, title, description, channel, views, date, thumbnail, channel_icon, video, videoList, toggleVideoView,user,userConnected,setVideoList,setSearchVideoList,toggleHomeView}) {
    const [videoCommentsList, setVideoCommentsList] = useState([]);
    const [videoDetails, setVideoDetails] = useState(null);
    const [videoDesc,setVideoDesc] = useState(description)
    const [editedTitle, setEditedTitle] = useState(title);
    const [videoWatched,setVideoWatched]= useState(video)


    useEffect(() => {
        const video1 = videoList.find(v => v.id === id);
        console.log(videoList)
        console.log("video id is",id)
        setVideoDetails(video1);
        setVideoCommentsList(video1 ? video1.comments || [] : []);
        setVideoDesc(video1.description)
        setEditedTitle(video1.title)
        setVideoWatched(video1.video)
    }, [id, videoList]);

    const addComment = (commentContent1, commentChannel1, commentChannel_icon1, commentDate1) => {
        if (videoDetails) {
            const updatedComments = [...videoDetails.comments, commentContent1];
            const updatedCommentsChannel = [...videoDetails.comments_channel, commentChannel1];
            const updatedCommentsChannelIcon = [...videoDetails.comments_channel_icon, commentChannel_icon1];
            const updatedCommentsDate = [...videoDetails.comments_date, commentDate1];
            videoDetails.comments = updatedComments;
            videoDetails.comments_channel = updatedCommentsChannel;
            console.log("updatedblah",updatedCommentsChannel)
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
    const editVideo = ( newDesc,newTitle) => {
            videoDetails.description=newDesc;
            videoDetails.title=newTitle;
            setVideoDesc(newDesc);
            setEditedTitle(newTitle);

    };
    const changeLikedBy =(num)=>{
        if (videoDetails){
            videoDetails.likedBy=num;
        }
    }
    const deleteVideo =()=>{
       
        const updatedVideoList = videoList.filter(video => video.id !== id);
        setVideoList(updatedVideoList);
        setSearchVideoList(updatedVideoList)
        
        toggleHomeView()
    }
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
    const resetComments =(id) =>{
        setVideoCommentsList([]);
        console.log("id",id)
        toggleVideoView(id);
    }
    if (!videoDetails) return null;

    return (
        <div className="video-watch-body">
            <div className="video-desc-comments-container">
                <div className="video-watch-container">
                    <video className="video-file" controls key={videoWatched} >
                        <source src={videoWatched} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <span className='video-watch-title'>{editedTitle}</span>
                <div className="video-watch-btn-container">
                    <Under_video_section
                        description={videoDesc}
                        channel={videoDetails.channel}
                        views={videoDetails.views}
                        date={videoDetails.date}
                        channel_icon={videoDetails.channel_icon}
                        addComment={addComment} 
                        user={user}
                        editVideo={editVideo}
                        deleteVideo={deleteVideo}
                        title={editedTitle}
                        userConnected={userConnected}
                        changeLikedBy={changeLikedBy}
                        likedBy={videoDetails.likedBy}/>
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
                            userConnected={userConnected}
                            user={user}
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
