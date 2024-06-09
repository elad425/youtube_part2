import './add_comment_box.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Add_comment_box({ channel, channel_icon, addComment, user }) {
    const [commentContent, setCommentContent] = useState('');

    const handleInputChange = (event) => {
        setCommentContent(event.target.value);
    };

    const sendCommentDetails = () => {
        const date = new Date();
        addComment(commentContent, user[1].user_name, channel_icon, date);
        setCommentContent(''); // Reset the input field
    };

    const commentBoxContent = (
        <div className="add-comment-container">
            <div className="add-comment-icon-content">
                <a href="#" className="icon-container">
                    <img className="channel-icon" src={channel_icon} alt="channel icon" />
                </a>
                <input
                    className="form-control comment-input"
                    type="text"
                    placeholder="Add a comment..."
                    value={commentContent}
                    onChange={handleInputChange}
                />
            </div>
            <div className="add-comment-button-container" onClick={sendCommentDetails}>
                <button className="comment-button">Comment</button>
            </div>
        </div>
    );

    return user ? (
        commentBoxContent
    ) : (
        <Link to="/signup" className="no-style-link">
            {commentBoxContent}
        </Link>
    );
}

export default Add_comment_box;
