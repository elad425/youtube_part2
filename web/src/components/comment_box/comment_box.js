import './comment_box.css'
import Like_dislike_buttons from '../like_dislike_buttons/like_dislike_buttons';

function Comment_box({ channel, channel_icon, date, comment }) {


    return (
        <div className="comment-box-container">
            <div className="comment-channel-icon">
                <a href="#" className="icon-container">
                    <img className="channel-icon" src={channel_icon} />
                </a>
            </div>
            <div className="comment-content">
                <div className="comment-name-date">
                    <span className='comment-channel'>{channel}</span>
                    <span className='comment-date'>{date}</span>
                </div>
                <span>{comment}</span>
                <Like_dislike_buttons />
            </div>
        </div>
    );
}
export default Comment_box