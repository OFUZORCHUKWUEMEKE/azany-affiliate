import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';

function App() {
  return (
    <>
      <Router>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/forgotpassword" element={<Forgotpassword/>}/>
         </Routes>
      </Router>
    </>
  );
}

export default App;
