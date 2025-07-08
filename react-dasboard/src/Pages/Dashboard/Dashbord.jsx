import React from 'react';
import SideNavbar from '../../Components/Sidebar/Sidebar';
import TopNavbar from '../../Components/Sidebar/TopNavBar';
import './Dashboard.css';
import Support from '../Support/Support';

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <SideNavbar />
      <div className="main-content">
        <TopNavbar />
        <div className="dashboard-body">
          <Support></Support>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
