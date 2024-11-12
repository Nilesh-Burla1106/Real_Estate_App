import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(''); // Added role state
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        axios.post('http://localhost:3001/register', { name, email, password, role })
        .then(result => { 
            console.log(result);
            navigate('/login'); // Redirect to login page after registration
        })
        .catch(err => console.log(err));
    };
    
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter your username"
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
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
                            <option value="">Select Role</option>
                            <option value="Admin">Admin</option>
                            <option value="Manager">Manager</option>
                            <option value="Telecaller">Telecaller</option>
                            <option value="Advisor">Advisor</option>
                            <option value="Accountant">Accountant</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                        Register
                    </button>
                </form>
                <p className="text-center mt-3">
                    Already have an account?{' '}
                    <Link to="/login" className="text-primary">
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
