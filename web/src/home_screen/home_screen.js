import React, { useState } from 'react';
import Home_button from '../components/home_button/home_button';
import Search_bar from '../components/search_bar/search_bar';
import Sign_in_button from '../components/sign_in_button/sign_in_button';
import Burger_menu from '../components/burger_menu/burger_menu';
import Create_button from '../components/create_video_button/create_video_button';
import Side_bar from '../components/side_bar/side_bar';
import Closed_side_bar from '../components/closed_side_bar/closed_side_bar';
import Video_filter_buttons from '../components/video_filter_buttons/video_filter_buttons';
import Video_list from '../components/video_list/video_list';

import './home_screen.css'
function Home_screen({user}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="site_container">
      <div className="top_header">
        <div className="menu_and_button">
        <Burger_menu toggleSidebar={toggleSidebar} />
          <Home_button />
        </div>
        <Search_bar />
        <Create_button />
        <Sign_in_button />
      </div>
      <div className="body-container">
        {isSidebarOpen ? <Side_bar /> : <Closed_side_bar />}
        <div className="video-page-container">
          <Video_filter_buttons />
          <Video_list />
        </div>

      </div>


    </div>
  );


} export default Home_screen;