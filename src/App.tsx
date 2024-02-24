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
import Dashboard from './pages/Dashboard';
import Payment from './pages/Payments';
import Otp from './pages/Otp';
import Withdrawal from './pages/Withdrawal';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Transaction from './pages/Transaction';
import Downline from './pages/ProfileDownline';
import Resetpassword from './pages/ResetPassword'
import Otpp from './pages/Otpp';
import DownlineSort from './pages/DownlineSort';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/forgetpassword/otp" element={<Otpp />} />
          <Route path="/payments/withdrawal" element={<Withdrawal />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard/downlines" element={<Downline />} />
          <Route path="/dashboard/transactions" element={<Transaction />} />
          <Route path="/reset" element={<Resetpassword />} />
          {/* <Route path="/profile/downlinesort" element={<DownlineSort />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
