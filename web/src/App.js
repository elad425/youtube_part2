import './App.css';
import Home_screen from './home_screen/home_screen.js';
import Login_screen from './login_screen/login_screen.js';
import Signup_screen from './signup_screen/signup_screen.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import user_data from './user_info.json';
import Videos from './data/video_data.json';

function App() {
  const [usersList, setUserList] = useState(user_data);
  const [user, setUser] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [videoList, setVideoList] = useState(Videos);
  const [searchVideoList,setSearchVideoList] =useState(Videos);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home_screen user={user} isUserLoggedIn={isUserLoggedIn} setUser={setUser} setIsUserLoggedIn={setIsUserLoggedIn}
        videoList={videoList} setVideoList={setVideoList} searchVideoList={searchVideoList} setSearchVideoList={setSearchVideoList} />} />
        <Route path="signup" element={<Signup_screen usersList={usersList} setUserList={setUserList} user={user} setUser={setUser} />} />
        <Route path="login" element={<Login_screen usersList={usersList} setUser={setUser} user={user} setIsUserLoggedIn={setIsUserLoggedIn} />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
