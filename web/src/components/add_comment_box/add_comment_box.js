import './add_comment_box.css'

function Add_comment_box({ channel_icon }) {


    return (
        <div className="add-comment-container">
            <div className="add-comment-icon-content">
                <a href="#" className="icon-container">
                    <img className="channel-icon" src={channel_icon} />
                </a>
                <input class="form-control comment-input" type="text" placeholder="Add a comment..."></input>
            </div>
            <div className="add-comment-button-container">
                <button className='comment-button'>Comment</button>
            </div>
        </div>

    );
}
export default Add_comment_box