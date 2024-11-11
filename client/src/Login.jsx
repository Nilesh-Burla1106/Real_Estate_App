import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        axios.post(`http://localhost:3001/login`, {email, password })
        .then(result => {console.log(result)
            if(result.data === "Success"){
                navigate('/home');
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
