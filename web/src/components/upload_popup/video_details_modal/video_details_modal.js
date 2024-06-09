import './video_details_modal.css'
import { ReactComponent as Thumb_upload_icon } from './thumb-upload-icon.svg'
import React, { useState } from 'react';


function Video_details_modal({ togglePopup, closeModal, addVideo, video_file }) {
    const [thumbnailFile, sethumbnailFile] = useState(null);
    const uploadFile = (e) => {
        let thumb_file = e.target.files[0];
        if (thumb_file) {
            sethumbnailFile(thumb_file)
        }
    }
    const passDetails = () => {
        let isUploaded=true;
        const title = document.querySelector('.input-title').value;
        const description = document.querySelector('.input-desc').value;
        const channel = "gagagag";
        if (thumbnailFile == null) {
            var canvas = document.getElementById('canvas');
            var video1 = document.getElementById('video1');
            sethumbnailFile(canvas.getContext('2d').drawImage(video1, 0, 0, video1.videoWidth, video1.videoHeight));
            isUploaded=false;
        }
        const channel_icon = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/thumbnail-background-youtube-2023-design-template-d1ba8caa87a7e45a222132372cd336a7_screen.jpg?ts=1674608286";
        addVideo(title, description,channel,  thumbnailFile, channel_icon, video_file,isUploaded);
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
                        <label for="file-upload" className="custom-file-upload">
                            <Thumb_upload_icon /> Custom Upload
                        </label>
                        <input id="file-upload" type="file" className='thumb-input' onChange={uploadFile} />
                    </div>
                </div>
                <div className="mini-video">
                    {video_file && <video className="mini-video-file" controls preload="metadata" id="video1">
                        <source src={URL.createObjectURL(video_file)} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>}
                    <canvas id="canvas"></canvas>
                </div>
            </div>
            <div className="next-btn-container">
                <button className='next-btn btn btn-primary' onClick={passDetails}>NEXT</button>
            </div>
        </div>
    );
}
export default Video_details_modal;

