import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import Home from './home';
import About from './about';
import Login from './login';
import Signup from './signup';
import Logout from './logout';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  return (
    <Router>
      <div>
        {/* RBC styled Navbar */}
        <Navbar bg="primary" expand="lg" className="navbar">
          <Navbar.Brand href="/" className="navbar-brand">
            <img
              src="/images/rbc-logo.png"
              alt="RBC Logo"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/">Services</Nav.Link>
              <Nav.Link as={Link} to="/">International</Nav.Link>
              <Nav.Link as={Link} to="/">Benefits</Nav.Link>
              <Nav.Link as={Link} to="/about">About RBC</Nav.Link>
              
            </Nav>
            <Nav className="align-items-center">
              <NavDropdown title="Other Sites" id="other-sites-dropdown">
                <NavDropdown.Item href="#site1">Site 1</NavDropdown.Item>
                <NavDropdown.Item href="#site2">Site 2</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="EN" id="language-dropdown">
                <NavDropdown.Item href="#en">EN</NavDropdown.Item>
                <NavDropdown.Item href="#fr">FR</NavDropdown.Item>
              </NavDropdown>

              {/* Show Logout button if logged in, else show Sign In button */}
              {isLoggedIn ? (
                <LogoutButton setIsLoggedIn={setIsLoggedIn} />
              ) : (
                <Button as={Link} to="/login" variant="warning" className="sign-in-button">
                  Sign In
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Main content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Login />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            
            <div className="hero-right">
              <img src="/images/a.png" alt="Hero Image" />
            </div>
          </div>
          
        </section>


       

        {/* Additional Links */}
        <section className="additional-links">
          <div className="link-container">
            <Link to="/ways-to-bank">Ways to Bank</Link>
            <Link to="/find-branch">Find a Branch</Link>
            <Link to="/investor-relations">Investor Relations</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </section>

        {/* Grid of Services */}
        <section className="services-grid">
          <h2>Welcome to RBC Personal Banking</h2>
          <p>Explore RBC services and related products</p>
          <div className="grid">
            <div className="grid-item">
              <img src="/images/wallet.jpg" alt="Find a chequing account" />
              <h3>Find a chequing account</h3>
              <p>For daily spending, making bill payments, and more.</p>
            </div>
            <div className="grid-item">
              <img src="/images/pig.jpg" alt="Find a savings account" />
              <h3>Find a savings account</h3>
              <p>Accounts to help you grow your savings.</p>
            </div>
            <div className="grid-item">
              <img src="/images/credit.jpg" alt="Find a credit card" />
              <h3>Find a credit card</h3>
              <p>RBC credit cards offer a host of benefits and features.</p>
            </div>
            <div className="grid-item">
              <img src="/images/house.jpg" alt="Explore mortgage options" />
              <h3>Explore mortgage options</h3>
              <p>Get specialized advice to help with your home ownership journey.</p>
            </div>
            <div className="grid-item">
              <img src="/images/graph.jpg" alt="Personal investing" />
              <h3>Personal investing</h3>
              <p>Registered plans and investments to help you reach your goals.</p>
            </div>
            <div className="grid-item">
              <img src="/images/loan.jpg" alt="Borrowing" />
              <h3>Borrowing</h3>
              <p>Find a borrowing option that fits your life.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>© 2024 RBC MyApp. All rights reserved.</p>
          <p><Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms">Terms of Use</Link></p>
        </footer>
      </div>
    </Router>
  );
}

// Separate LogoutButton component that uses useNavigate hook
function LogoutButton({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false); // Set login status to false
    navigate('/'); // Redirect to home after logging out
  };

  return (
    <Button variant="warning" className="sign-in-button" onClick={handleLogout}>
      Logout
    </Button>
  );
}

export default App;
