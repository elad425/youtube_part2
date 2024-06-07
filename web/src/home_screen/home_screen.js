import React, { useState, useEffect } from 'react';
import Home_button from '../components/home_button/home_button';
import Search_bar from '../components/search_bar/search_bar';
import Sign_in_button from '../components/sign_in_button/sign_in_button';
import Burger_menu from '../components/burger_menu/burger_menu';
import Create_button from '../components/create_video_button/create_video_button';
import Side_bar from '../components/side_bar/side_bar';
import Closed_side_bar from '../components/closed_side_bar/closed_side_bar';
import Video_filter_buttons from '../components/video_filter_buttons/video_filter_buttons';
import Upload_popup from '../components/upload_popup/upload_popup';
import Videos from '../data/video_data.json';
import Video from '../components/video_card/video_card';
import Video_Watch from '../components/video_watch/video_watch';
import Dark_mode_btn from '../components/dark-mode-btn/dark-mode-btn';
import User_logo from '../components/user_logo/user_logo';
import './home_screen.css';

function Home_screen({ user, isUserLoggedIn }) {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoList, setVideoList] = useState(Videos);
  const [searchVideoList,setSearchVideoList] =useState(Videos);
  const [idNum, setIdNum] = useState(1);
  const [isVideoWatched, setIsVideoWatched] = useState(false);
  const [videoBeingWatched, setVideoBeingWatched] = useState('');
  console.log("homegagdg")
  console.log(user)
  const addComment = (videoId, comment) => {
    setVideoList(prevVideoList =>
      prevVideoList.map(video =>
        video.id === videoId ? { ...video, comments: [...video.comments, comment] } : video
      )
    );
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const doSearch = (q) => {
    console.log(videoList)
    console.log("Here")
    setVideoList(searchVideoList.filter((video) => video.title.includes(q)));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const addVideo = (title, description, channel, thumbnail, channel_icon, video_file, isUploadedThumb) => {
    let url = thumbnail;
    if (isUploadedThumb) {
      url = URL.createObjectURL(thumbnail);
    }
    let url2 = URL.createObjectURL(video_file);
    let source = '';
    if (user[1].picture instanceof Blob) {
        source = URL.createObjectURL(user[1].picture);
    } else {
        source = 'youtube_text.png'; // Provide a default image path
    }
    const new_video = {
      id: idNum,
      title: title,
      description: description,
      channel: channel,
      views: 0,
      date: 'today',
      thumbnail: url,
      channel_icon: source,
      video: url2,
      isLocal: false,
    };
    setIdNum(idNum + 1);
    setVideoList([...videoList, new_video]);
    setSearchVideoList([...searchVideoList, new_video]);

  };

  const toggleVideoView = (id, title, description, channel, views, date, thumbnail, channel_icon, video, isVideo) => {
    const new_video = {
      id,
      title,
      description,
      channel,
      views,
      date,
      thumbnail,
      channel_icon,
      video,
      isLocal: false,
    };
    setIsVideoWatched(true);
    setVideoBeingWatched(new_video);
  };

  const returnToHome = () => {
    setIsVideoWatched(false);
  };

  return (
    <div className="site_container">
      <div className="top_header">
        <div className="menu-and-button">
          <Burger_menu toggleSidebar={toggleSidebar} />
          <Home_button returnToHome={returnToHome} />
        </div>
        <Search_bar doSearch={doSearch} />
        <Create_button onClick={toggleModal} user={user} />
        <Dark_mode_btn />
        {isUserLoggedIn ? <User_logo user={user} /> : <Sign_in_button />}
      </div>
      <div className="page-container">
        {isModalOpen && <Upload_popup closeModal={toggleModal} addVideo={addVideo} />}
        {!isVideoWatched ? (
          <div className="body-container">
            {isSidebarOpen ? <Side_bar /> : <Closed_side_bar />}
            <div className={isSidebarOpen ? 'video-page-container-reduced' : 'video-page-container-full'}>
              <Video_filter_buttons />
              <div className='videos-container-grid'>
                {videoList.map((video) => (
                  <Video key={video.id} {...video} toggleView={toggleVideoView} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="watch-video-view-body">
            <Video_Watch
              {...videoBeingWatched}
              videoList={searchVideoList}
              toggleVideoView={toggleVideoView}
              addComment={addComment}
              user={user}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home_screen;
