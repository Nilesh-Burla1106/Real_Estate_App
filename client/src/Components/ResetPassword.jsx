import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/ResetPassword.css'; // Import your CSS here

function ResetPassword() {
  const [password, setPassword] = useState(''); 
  const navigate = useNavigate();
  const { id, token } = useParams();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/reset-password/${id}/${token}`, { password }, { withCredentials: true })
      .then(result => {
        if (result.data.Status === "Success") {
          navigate("/login");
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="reset-password-page">
      <div className="reset-password-card">
        <h2 className="reset-password-title">Reset Password</h2>
        <form onSubmit={handleSubmit} className="reset-password-form">
          <div>
            <input
              type="password"
              placeholder="Enter new password"
              value={password} 
              required
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit" className="reset-password-btn">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
