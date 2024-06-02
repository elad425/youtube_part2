import './App.css';
import Home_screen from './home_screen/home_screen.js';
import Login_screen from './login_screen/login_screen.js';
import Signup_screen from './signup_screen/signup_screen.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home_screen />} />
        <Route path="signup" element={<Signup_screen />} />
        <Route path="login" element={<Login_screen />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
