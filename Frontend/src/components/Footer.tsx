import type React from "react"
import { Link } from "react-router-dom"
import "./Footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="company-section">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <span>EZY</span>
              </div>
              <span className="footer-logo-text">EZY</span>
            </div>
            <p className="company-description">
              We are always your trusted partner for the best person to transform yourself with our unique & world-class
              corporate training hub.
            </p>

            <div className="newsletter-section">
              <h3>Subscribe Our Newsletter</h3>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email address" className="newsletter-input" />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="links-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/gallery">Our Gallery</Link>
              </li>
              <li>
                <Link to="/courses">Best Courses</Link>
              </li>
              <li>
                <Link to="/faq">Your FAQ's</Link>
              </li>
              <li>
                <Link to="/consultations">Consultations & Refunds</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="contact-section">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <p>Headquarter Company:</p>
              <p>EZY Skills, 3rd Floor</p>
              <p>Modern Road</p>
              <p>Shivajinagar, Pune</p>
              <p>India</p>
              <p className="contact-email">📧 infoo@ezyskills.com</p>
              <p>📞 +92 51-2345000</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-legal">
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                📘
              </a>
              <a href="#" aria-label="Twitter">
                🐦
              </a>
              <a href="#" aria-label="Instagram">
                📷
              </a>
              <a href="#" aria-label="LinkedIn">
                💼
              </a>
              <a href="#" aria-label="YouTube">
                📺
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
