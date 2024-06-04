import './video_card.css'
function Video_card({ id, title, channel, views, date, thumbnail, channel_icon,video }) {
    return (
        <div className="video-card-container">
           
            <a href="#" class="thumbnail">
                <img class="thumbnail-image" src={thumbnail} />
            </a>
            <div className="video-container">
                     <video className="video-file" controls>
                        <source src="" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
            </div>
            <div className="video-bottom-section">
                <a href="#" class="thumbnail">
                    <img class="channel-icon" src={channel_icon} />
                </a>
                <div className="video-details">
                    <a href="#" class="video-title">{title}</a>
                    <a href="#" class="video-channel-name">{channel}</a>
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