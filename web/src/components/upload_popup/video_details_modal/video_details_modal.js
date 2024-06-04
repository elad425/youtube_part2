import './video_details_modal.css'
import { ReactComponent as Upload_icon } from '../upload_icon.svg'

function Video_details_modal({ togglePopup, file }) {
    return (
        <div className="details-modal">
            <span className="details-span">Details</span>
            <div className="details-popup">
                <div className="details-body">
                    <div className="form-floating inputs">
                        <input className="input-title" type="text" placeholder="Add a title that describes your video" aria-label="title"></input>
                        <input className="input-desc" type="text" placeholder="Tell viewers about your video" aria-label="title"></input>
                    </div>
                    <div className="thumbnail-body">
                        <span className="thumb-span">Thumbnail</span>
                        <span className="thumb-detail">Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention. </span>
                        
                    </div>
                </div>
                <div className="mini-video">
                    {file && <video className="video-file" controls>
                        <source src={URL.createObjectURL(file)} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>}
                </div>
            </div>
        </div>
    );
}
export default Video_details_modal;

