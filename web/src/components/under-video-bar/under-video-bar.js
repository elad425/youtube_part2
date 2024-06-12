import './under-video-bar.css'
import Share_button from '../share-button/share-button'
import Like_dislike_buttons from '../like_dislike_buttons/like_dislike_buttons';
import React, { useEffect, useState } from 'react';
import Add_comment_box from '../add_comment_box/add_comment_box';
import { ReactComponent as Dots_menu } from './dots-menu.svg';

function Under_video_bar({ description, channel, views, date, channel_icon, addComment, user, editVideo, deleteVideo, title, userConnected }) {
    console.log("desc is ",description);
    let rightChannel = false;
    if (userConnected){
       
        if (user[1].user_name==channel){
            rightChannel=true;
        }
    }
    let source = ''
    if (user != null && user[1].picture instanceof Blob) {
        source = URL.createObjectURL(user[1].picture);
    } else {
        source = 'no-user-icon.jpg'; // Provide a default image path
    }
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };

    const [editMode, setEditMode] = useState(false);
    const [editedDesc, setEditedDesc] = useState(description);
    const [titleEdit, setTitleEdit] = useState(title);

    const handleEdit = (event) => {
        event.preventDefault();
        setEditMode(!editMode);
    }

    const handleDelete = (event) => {
        event.preventDefault();
        deleteVideo();
    };
    const handleTitleChange = (event) => {
        setTitleEdit(event.target.value);
    }
    const handleDescChange = (event) => {
        setEditedDesc(event.target.value);
    };

    const handleSave = () => {
        editVideo(editedDesc, titleEdit);
        setEditMode(false);
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

                <Like_dislike_buttons />

                <Share_button />
            </div>
            <div className="under-video-details-container">
                <div className="views-date-container">
                    <span className='views-under-span'>{views} views</span>
                    <span>{date}</span>
                    {rightChannel && (
                        <>
                            <button className='dots-menu-btn dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false">
                                <Dots_menu />
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={handleEdit}>Edit</a></li>
                                <li><a className="dropdown-item" href="#" onClick={handleDelete}>Delete</a></li>
                            </ul>
                        </>
                    )}
                </div>
                <div className="description-container">
                    {editMode && userConnected ? (
                        <div className="edit-video-body">
                            <div className="edit-video-container">
                                <div className="edit-video-title-container edit-container">
                                    <span className="desc-edit-span edit-span">Edit Title:</span>
                                    <textarea className="title-edit-textarea edit-textarea" value={titleEdit} onChange={handleTitleChange} />
                                </div>
                                <div className="edit-video-desc-container edit-container">
                                    <span className="desc-edit-span edit-span">Edit Description:</span>
                                    <textarea className="desc-edit-textarea edit-textarea" value={editedDesc} onChange={handleDescChange} />
                                </div>
                            </div>
                            <div className="save-btn-container">
                                <button class="save-edit-btn btn btn-primary" onClick={handleSave}>Save</button>
                            </div>
                        </div>

                    ) : (
                        <p className='under-video-desc'>{description}</p>
                    )}

                </div>

            </div>
            <span className="comments-title">Comments</span>
            <Add_comment_box channel={channel} channel_icon={source} addComment={addComment} user={user}></Add_comment_box>

        </div>
    );
}
export default Under_video_bar