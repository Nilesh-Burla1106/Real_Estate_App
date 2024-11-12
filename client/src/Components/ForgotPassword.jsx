import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/ForgotPassword.css'; // Don't forget to import your CSS

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(''); 
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); 

        try {
            const result = await axios.post('http://localhost:3001/forgot-password', { email });
            if (result.data.Status === "Success") {
                navigate("/login");
            } else {
                setError(result.data.Message || "An error occurred. Please try again.");
            }
        } catch (err) {
            console.error(err);
            setError("Failed to send request. Please try again."); 
        }
    };

    return (
        <div className="forgot-password-page">
            <div className="forgot-password-card">
                <h2 className="forgot-password-title">Forgot Password</h2>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit} className="forgot-password-form">
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="forgot-password-btn">
                        Send
                    </button>
                </form>
                <p>
                    <span>Remember your password? </span>
                    <a href="/login" className="link">Login here</a>
                </p>
            </div>
        </div>
    );
}

export default ForgotPassword;
