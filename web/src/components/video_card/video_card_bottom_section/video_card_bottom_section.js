import './video_card_bottom_section.css'

function Video_card_bottom_section({  title, channel, views, date, channel_icon }) {
    return (
      
            <div className="video-bottom-section">
                <a href="#" className="icon-container">
                    <img className="channel-icon" src={channel_icon} />
                </a>
                <div className="video-details">
                    <a href="#" className="video-title">{title}</a>
                    <a href="#" className="video-channel-name">{channel}</a>
                    <div className="video-metadata">
                        <span className="views">{views}</span>
                        •
                        <span className="date">{date}</span>
                    </div>
                </div>
            </div>


    );
}
export default Video_card_bottom_section