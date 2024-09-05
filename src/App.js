import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DeviceList from './components/DeviceList';
import DeviceDetails from './components/DeviceDetails';
import DeviceLogs from './components/DeviceLogs';
import AlertsConfig from './components/AlertsConfig';
import Login from './components/Login';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/devices">Devices</Link></li>
            <li><Link to="/alerts">Alerts</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<DeviceList />} />
          <Route path="/devices/:id" element={<DeviceDetails />} />
          <Route path="/devices/:id/logs" element={<DeviceLogs />} />
          <Route path="/alerts" element={<AlertsConfig />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
