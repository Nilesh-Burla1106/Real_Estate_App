import React from 'react';
import './css/Admin.css';

const Admin = () => {
  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Dashboard</h1>
      <div className="admin-sections">
        {/* Client Preferences Section */}
        <div className="admin-card">
          <h4>Client Preferences</h4>
          <p>Manage client preferences, track their interests, and tailor services accordingly.</p>
          <button className="admin-button">View & Manage Client Preferences</button>
        </div>

        {/* Telecaller Work Section */}
        <div className="admin-card">
          <h4>Telecaller Work</h4>
          <p>Oversee telecaller activities, manage call logs, and track communication with clients.</p>
          <button className="admin-button">View & Manage Telecaller Work</button>
        </div>

        {/* Advisor Work Section */}
        <div className="admin-card">
          <h4>Advisor Work</h4>
          <p>Assign and review advisor tasks, track consultations, and monitor client interactions.</p>
          <button className="admin-button">View & Manage Advisor Work</button>
        </div>

        {/* Manage Work Section */}
        <div className="admin-card">
          <h4>Manage Work</h4>
          <p>Oversee and manage overall tasks, workflow, and office activities to ensure efficiency.</p>
          <button className="admin-button">View & Manage Office Work</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
