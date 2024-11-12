import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [loading, setLoading] = useState(false); // Added loading state
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Selected role:", role);
        
        axios.post(`http://localhost:3001/login`, { email, password })
            .then(result => {
                console.log("Backend response:", result.data);
                const { message, role: userRole } = result.data;
    
                if (message === "Success") {
                    if (role === userRole) {
                        console.log("Navigating to:", userRole);
                        switch (userRole) {
                            case "Admin":
                                navigate('/admin');
                                break;
                            case "Manager":
                                navigate('/manager');
                                break;
                            case "Telecaller":
                                navigate('/telecaller');
                                break;
                            case "Advisor":
                                navigate('/advisor');
                                break;
                            case "Accountant":
                                navigate('/accountant');
                                break;
                            default:
                                navigate('/home');
                        }
                    } else {
                        alert("Role mismatch! Please select the correct role.");
                    }
                } else {
                    alert(message); // Show any other error message from the backend
                }
            })
            .catch(err => {
                console.log("Error:", err);
                alert("Something went wrong, please try again.");
            });
    };
    
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter your password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <select
                            className="form-control"
                            id="role"
                            required
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="">Select your role</option>
                            <option value="Admin">Admin</option>
                            <option value="Manager">Manager</option>
                            <option value="Telecaller">Telecaller</option>
                            <option value="Advisor">Advisor</option>
                            <option value="Accountant">Accountant</option>
                        </select>
                    </div>
                    <div className="forget-pass">
                        <Link className="link" to="/forgot-password">Forgot Password?</Link>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                        {loading ? 'Logging in...' : 'Log in'}
                    </button>
                </form>
                <p className="text-center mt-3">
                    Do not have an account?{' '}
                    <Link to="/register" className="text-primary">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
