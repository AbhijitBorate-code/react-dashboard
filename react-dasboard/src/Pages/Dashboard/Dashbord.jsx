import React from 'react';
import SideNavbar from '../../Components/Sidebar/Sidebar';
import TopNavbar from '../../Components/Sidebar/TopNavBar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      {/* Sidebar on the left */}
      <SideNavbar />

      {/* Main content on the right */}
      <div className="main-content">
        <TopNavbar />
        <div className="dashboard-body">
          {/* Content here */}
          <h2>Welcome to Crypto Dashboard</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
