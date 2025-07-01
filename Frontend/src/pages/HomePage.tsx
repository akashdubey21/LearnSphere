import type React from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "./HomePage.css"

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Header />

      <main className="home-main">
        <div className="home-content">
          <div className="home-logo">
            <div className="home-logo-icon">
              <span>EZY</span>
            </div>
            <span className="home-logo-text">EZY Skills</span>
          </div>

          <h1 className="home-title">Welcome to EZY Skills</h1>

          <p className="home-description">Transform yourself with our unique & world-class corporate training hub</p>

          <div className="home-actions">
            <Link to="/signup" className="btn btn-primary">
              Create Account
            </Link>
            <Link to="/login" className="btn btn-outline">
              Log In
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage
