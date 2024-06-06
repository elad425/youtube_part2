// Home_screen.js
import React, { useState } from 'react';
import Home_button from '../components/home_button/home_button';
import Search_bar from '../components/search_bar/search_bar';
import Sign_in_button from '../components/sign_in_button/sign_in_button';
import Burger_menu from '../components/burger_menu/burger_menu';
import Create_button from '../components/create_video_button/create_video_button';
import Side_bar from '../components/side_bar/side_bar';
import Closed_side_bar from '../components/closed_side_bar/closed_side_bar';
import Video_filter_buttons from '../components/video_filter_buttons/video_filter_buttons';
import Upload_popup from '../components/upload_popup/upload_popup';
import Videos from '../data/video_data.json'
import Video from '../components/video_card/video_card';
import Video_Watch from '../components/video_watch/video_watch'
import './home_screen.css';

function Home_screen() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoList, setVideoList] = useState(Videos)
  const [idNum, setIdNum] = useState(11);
  const [isVideoWatched, setIsVideoWatched] = useState(false);
  const [videoBeingWatched, setVideoBeingWatched] = useState("");
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const addVideo = (title, description, channel, thumbnail, channel_icon, video_file, isUploadedThumb) => {
    let url = thumbnail;
    if (isUploadedThumb) {
      url = URL.createObjectURL(thumbnail);
    }
    let url2 = URL.createObjectURL(video_file)
    const new_video = {
      "id": { idNum },
      "title": title,
      "description": description,
      "channel": channel,
      "views": 0,
      "date": "today",
      "thumbnail": url,
      "channel_icon": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/thumbnail-background-youtube-2023-design-template-d1ba8caa87a7e45a222132372cd336a7_screen.jpg?ts=1674608286",
      "video": url2,
      "isLocal": false

    }
    setIdNum(idNum + 1)
    setVideoList([...videoList, new_video])
  }

  const toggleVideoView = (title, description, channel, views, date, thumbnail, channel_icon, video, isVideo) => {
    const new_video = {
      "id": { idNum },
      "title": title,
      "description": description,
      "channel": channel,
      "views": views,
      "date": date,
      "thumbnail": thumbnail,
      "channel_icon": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/thumbnail-background-youtube-2023-design-template-d1ba8caa87a7e45a222132372cd336a7_screen.jpg?ts=1674608286",
      "video": video,
      "isLocal": false
    }
    setIsVideoWatched(true);
    console.log("teaag")
    console.log(video)
    console.log("teaag")    
    setVideoBeingWatched(new_video);
  }
  const returnToHome = () => {
    setIsVideoWatched(false);
  }
  

  return (
    <div className="site_container">
      <div className="top_header">
        <div className="menu_and_button">
          <Burger_menu toggleSidebar={toggleSidebar} />
          <Home_button returnToHome={returnToHome} />
        </div>
        <Search_bar />
        <Create_button onClick={toggleModal} />
        <Sign_in_button />
      </div>
      <div className="page-container">

        {isModalOpen && <Upload_popup closeModal={toggleModal} addVideo={addVideo} />}

        {!isVideoWatched ? (
          <div className="body-container">
            {isSidebarOpen ? <Side_bar /> : <Closed_side_bar />}
            <div className={isSidebarOpen ? 'video-page-container-reduced' : 'video-page-container-full'}>
              <Video_filter_buttons />
              <div className='videos-container-grid'>
                {
                  videoList.map((video) =>
                    <Video {...video} toggleView={toggleVideoView} />
                  )
                }
              </div>
            </div>

          </div>
        )
          : (
            <div className="watch-video-view-body">
              <Video_Watch {...videoBeingWatched} videoList={videoList} toggleVideoView={toggleVideoView} />
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Home_screen;