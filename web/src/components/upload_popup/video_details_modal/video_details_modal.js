import './video_details_modal.css'
import { ReactComponent as Thumb_upload_icon } from './thumb-upload-icon.svg'
import React, { useState} from 'react';


function Video_details_modal({ togglePopup,closeModal, file,addVideo }) {
    const [thumbnailFile, sethumbnailFile] = useState(null);
    const uploadFile =(e)=>{
        let thumb_file = e.target.files[0];
        if (thumb_file){
            sethumbnailFile(thumb_file)
            console.log(thumb_file)
        }
    }
    const passDetails = ()=>{
        const title = document.querySelector('.input-title').value;
        const description = document.querySelector('.input-desc').value;
        const objectUrl = URL.createObjectURL(thumbnailFile); 
        console.log("before")
        console.log(objectUrl)
        console.log("after")
       
        const channel = "gagagag"; // You need to set the channel, video, and channel_icon values appropriately
        const video = "dgagdg";
        const channel_icon = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/thumbnail-background-youtube-2023-design-template-d1ba8caa87a7e45a222132372cd336a7_screen.jpg?ts=1674608286";
        addVideo(title, channel, description, thumbnailFile, video, channel_icon);
            closeModal();
    }
    return (
        <div className="details-modal">
            <div className="details-span-container">
            <span className="details-span">Details</span>
            </div>
            <div className="details-popup">
                <div className="details-body">
                    <div className="form-floating inputs">
                        <input className="input-title" type="text" placeholder="Add a title that describes your video" aria-label="title"></input>
                        <input className="input-desc" type="text" placeholder="Tell viewers about your video" aria-label="title"></input>
                    </div>
                    <div className="thumbnail-body">
                        <span className="thumb-span">Thumbnail</span>
                        <span className="thumb-detail">Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention. </span>
                        <label for="file-upload" class="custom-file-upload">
                            <Thumb_upload_icon /> Custom Upload
                        </label>
                        <input id="file-upload" type="file" className='thumb-input' onChange={uploadFile}/>
                    </div>
                </div>
                <div className="mini-video">
                    {file && <video className="video-file" controls>
                        <source src={URL.createObjectURL(file)} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>}
                </div>
            </div>
            <div className="next-btn-container">
                <button className='next-btn btn btn-primary' onClick={passDetails}>NEXT</button>
            </div>
        </div>
    );
}
export default Video_details_modal;

