import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(''); // New state for role selection
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        axios.post(`http://localhost:3001/login`, { email, password })
            .then(result => {
                console.log(result);
                const { message, role: userRole } = result.data;
                if (message === "Success" && role === userRole) { // Check if selected role matches
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
                    alert(message === "Success" ? "Role mismatch" : message); // Show error message
                }
            })
            .catch(err => console.log(err));
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
                    <button type="submit" className="btn btn-primary btn-block">
                        Log in
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
