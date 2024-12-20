import React, { useState } from 'react';
import './comment_box.css';
import Like_dislike_buttons from '../like_dislike_buttons/like_dislike_buttons';
import { ReactComponent as Dots_menu } from './dots-menu.svg';

function Comment_box({ index, comment, channel, channel_icon, date, editComment, deleteComment, userConnected, user }) {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    let rightChannel = false;
    console.log("user is ",user)
    console.log("userchannel",user[1].user_name)
    console.log("chanen",channel)
    if (userConnected){
        if (user[1].user_name==channel){
            rightChannel=true;
        }
    }

    const [editMode, setEditMode] = useState(false);
    const [editedComment, setEditedComment] = useState(comment);

    const handleEdit = (event) => {
        event.preventDefault();
        setEditMode(!editMode);
    };


    const handleCommentChange = (event) => {
        setEditedComment(event.target.value);
    };

    const handleSave = () => {
        editComment(index, editedComment);
        setEditMode(false);
    };
    const handleDelete = (event) => {
        event.preventDefault();
        deleteComment(index);
    };

    return (
        <div className="comment-box-container">
            <div className="comment-header">
                <img src={channel_icon} alt="channel icon" className="channel-icon" />
            </div>
            <div className="comment-content">
                <div className="comment-channel-date">
                    <span className="comment-channel-name">{channel}</span>
                    <span className="comment-date">{formattedDate}</span>
                    {rightChannel && (
                        <>
                            <button className='dots-menu-btn ' data-bs-toggle="dropdown" aria-expanded="false">
                                <Dots_menu />
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={handleEdit}>Edit</a></li>
                                <li><a className="dropdown-item" href="#" onClick={handleDelete}>Delete</a></li>
                            </ul>
                        </>
                    )
                    }
                </div>
                {editMode ? (
                    <textarea className="comment-edit-textarea" value={editedComment} onChange={handleCommentChange} />
                ) : (
                    <p className="comment-content-p">{comment}</p>
                )}
                <Like_dislike_buttons isUserConnected={userConnected}/>
                {editMode && <button onClick={handleSave}>Save</button>}
            </div>
        </div>
    );
}

export default Comment_box;
