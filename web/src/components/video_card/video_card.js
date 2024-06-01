import './video_card.css'
function video_card({ id, title, channel, views, date, thumbnail, channel_icon }) {
    return (
        <div className="video-container">
            <a href="#" class="thumbnail">
                <img class="thumbnail-image" src={thumbnail} />
            </a>
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
export default video_card