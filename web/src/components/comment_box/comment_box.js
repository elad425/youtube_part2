// comment_box.js
import './comment_box.css';
import Like_dislike_buttons from '../like_dislike_buttons/like_dislike_buttons';

function Comment_box({ comment, channel, channel_icon, date }) {
    console.log("Comment data:");
    console.log("comment:", comment);
    console.log("channel:", channel);
    console.log("channel_icon:", channel_icon);
    console.log("date:", date);
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="comment-box-container">
            <div className="comment-header">
                <img src={channel_icon} alt="channel icon" className="channel-icon" />

            </div>
            <div className="comment-content">
                <div className="comment-channel-date">
                    <span className="comment-channel-name">{channel}</span>
                    <span className="comment-date">{formattedDate}</span>
                </div>
                <p className="comment-content-p">
                    {comment}
                </p>
                <Like_dislike_buttons />
            </div>
           
        </div>
    );
}

export default Comment_box;
