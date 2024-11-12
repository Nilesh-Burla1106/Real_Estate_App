import React from 'react';
import '../css/Admin.css';
import { Link } from 'react-router-dom';

const Advisor = () => {
  return (
    <div className="admin-container">
      <h1 className="admin-title">Advisor Dashboard</h1>
      <div className="admin-sections">
        {/* Client Preferences Section */}
        <div className="admin-card">
          <h4>New Client Form</h4>
          <p>Registration for the new client</p>
          <button className="admin-button">
              <Link to="/new-client-form" style={{ color: 'white', textDecoration: 'none' }}>
                  Client form
              </Link>
          </button>  
        </div>

        {/* Telecaller Work Section */}
        <div className="admin-card">
          <h4>Client Feedback</h4>
          <p>Feedback by client on pariticular site.</p>
          <button className="admin-button">
              <Link to="/site-visit" style={{ color: 'white', textDecoration: 'none' }}>
                  Site Visits
              </Link>
          </button>      
        </div>

      </div>
    </div>
  );
};

export default Advisor;
