import './App.css';
import Home_screen from './home_screen/home_screen.js';
import Login_screen from './login_screen/login_screen.js';
import Signup_screen from './signup_screen/signup_screen.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import user_data from './user_info.json';


function App() {
  const [usersList, setUserList] = useState(user_data)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home_screen />} />
        <Route path="signup" element={<Signup_screen usersList={usersList} setUserList={setUserList} />} />
        <Route path="login" element={<Login_screen usersList={usersList} />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
