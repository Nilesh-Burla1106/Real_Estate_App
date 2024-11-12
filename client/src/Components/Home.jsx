import React from 'react';
import '../css/Home.css';
// import '../assets/Background_Image.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="home-title">Sanmitra Developers</h1>
        <p className="home-subtitle">Manage tasks, monitor activities, and ensure smooth operations.</p>
        <Link to="/login" className="home-button">Get Started</Link>
      </div>
    </div>
  );
};

export default Home;
