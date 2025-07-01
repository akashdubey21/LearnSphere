import type React from "react"
import { Link } from "react-router-dom"
import "./Header.css"

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-icon">
              <span>EZY</span>
            </div>
            <span className="logo-text">EZY</span>
          </div>

          <nav className="navigation">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/course-selection" className="nav-link">
              Course Selection
            </Link>
            <Link to="/courses" className="nav-link">
              Courses
            </Link>
            <Link to="/faq" className="nav-link">
              FAQ
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </nav>

          <div className="header-actions">
            <Link to="/login" className="login-link">
              Log In
            </Link>
            <Link to="/signup" className="get-started-btn">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
