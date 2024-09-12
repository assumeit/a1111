import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './login.css';  // Assuming you have the Login.css for styling

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State for error handling
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    // Sample authentication logic
    if (email === 'asmit' && password === 'basnet') {
      setIsLoggedIn(true); // Set login status to true
      navigate('/dashboard'); // Redirect to dashboard on successful login
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="login-container">
      {/* Left side image */}
      <div className="image-section">
        <img src="/images/leftside.png" alt="Login background" />
      </div>

      {/* Right side form */}
      <div className="form-section">
        <h2>Secure Sign-In</h2>
        <p>RBC Online Banking</p>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Client Card or Username:</label>
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" /> Save client card or username
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Next</button>
        </form>
        <div className="login-links">
          <a href="#">Recover Your Username</a> | <a href="#">Enrol in Online Banking</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
