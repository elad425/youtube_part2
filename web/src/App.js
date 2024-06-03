import './App.css';
import Home_screen from './home_screen/home_screen.js';
import Login_screen from './login_screen/login_screen.js';
import Signup_screen from './signup_screen/signup_screen.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import user_data from './user_info.json';

function App() {
  const [usersList, setUserList] = useState(user_data)
  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home_screen user={user} />} />
        <Route path="signup" element={<Signup_screen usersList={usersList} setUserList={setUserList} setUser={setUser} user={user} />} />
        <Route path="login" element={<Login_screen usersList={usersList} setUser={setUser} user={user}  />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
