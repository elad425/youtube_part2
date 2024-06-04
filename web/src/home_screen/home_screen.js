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

import './home_screen.css';

function Home_screen() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoList, setVideoList] = useState(Videos)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
   const addVideo = (title,channel, description, thumbnail, video,channel_icon) => {
    console.log("adding stuff")
    console.log(thumbnail)
    const objectUrl = URL.createObjectURL(thumbnail); 
    const new_video = {
      "id": 11,
      "title": "title",
      "channel": "chanhellgagdagag",
      "views": 0,
      "date": "today",
      "thumbnail": objectUrl,
      "channel_icon": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/thumbnail-background-youtube-2023-design-template-d1ba8caa87a7e45a222132372cd336a7_screen.jpg?ts=1674608286",
    }
    setVideoList([...videoList,new_video])
  }



  return (
    <div className="site_container">
      <div className="top_header">
        <div className="menu_and_button">
          <Burger_menu toggleSidebar={toggleSidebar} />
          <Home_button />
        </div>
        <Search_bar />
        <Create_button onClick={toggleModal} />
        <Sign_in_button />
      </div>
      <div className="body-container">
        {isModalOpen && <Upload_popup closeModal={toggleModal} addVideo={addVideo}/>}
        {isSidebarOpen ? <Side_bar /> : <Closed_side_bar />}
        <div className="video-page-container">
          <Video_filter_buttons />
          <div className='videos-container-grid'>
            {
              videoList.map((video) =>
                <Video {...video} />
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_screen;