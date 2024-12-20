import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Admin.css'

const Admin = () => {
  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Dashboard</h1>
      <div className="admin-sections">
        {/* Client Preferences Section */}
        <div className="admin-card">
          <h4>Accountant</h4>
          <p>Manage client preferences, track their interests, and tailor services accordingly.</p>
          <button className="admin-button">
              <Link to="/accountant" style={{ color: 'white', textDecoration: 'none' }}>
                  Accounts
              </Link>
          </button>  
        </div>

        {/* Telecaller Work Section */}
        <div className="admin-card">
          <h4>Telecaller Work</h4>
          <p>Oversee telecaller activities, manage call logs, and track communication with clients.</p>
          <button className="admin-button">
              <Link to="/telecaller" style={{ color: 'white', textDecoration: 'none' }}>
                  View & Manage Telecaller Work
              </Link>
          </button>      
        </div>

        {/* Advisor Work Section */}
        <div className="admin-card">
          <h4>Advisor Work</h4>
          <p>Assign and review advisor tasks, track consultations, and monitor client interactions.</p>
          <button className="admin-button">
              <Link to="/advisor" style={{ color: 'white', textDecoration: 'none' }}>
                  Onsite Advisor tasks
              </Link>
          </button>  
        </div>

        {/* Manage Work Section */}
        <div className="admin-card">
          <h4>Manage Work</h4>
          <p>Oversee and manage overall tasks, workflow, and office activities to ensure efficiency.</p>
          <button className="admin-button">
              <Link to="/manager" style={{ color: 'white', textDecoration: 'none' }}>
              Manager tasks
              </Link>
          </button>  
        </div>
      </div>
    </div>
  );
};

export default Admin;
