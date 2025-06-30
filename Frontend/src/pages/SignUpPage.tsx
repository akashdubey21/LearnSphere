"use client"

import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "./AuthPages.css"

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      alert(result.message || "Registration failed");
      return;
    }

    alert("User registered successfully!");
    // Optionally redirect to login page
  } catch (err) {
    console.error("Signup error:", err);
    alert("An error occurred while signing up");
  }
};

  return (
    <div className="auth-page">
      <Header />

      <main className="auth-main">
        <div className="auth-container">
          <div className="auth-form-container">
            <div className="auth-form">
              <div className="auth-header">
                <h1>
                  Create <span className="highlight">Account</span>
                </h1>
              </div>

              <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword" className="form-label">
                    Re-Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    className="form-input"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  Create Account
                </button>
              </form>

              <div className="social-login">
                <div className="social-divider">Or Sign in</div>

                <div className="social-buttons">
                  <button className="btn btn-social">
                    <span className="social-icon facebook">📘</span>
                    Login
                  </button>
                  <button className="btn btn-social">
                    <span className="social-icon apple">🍎</span>
                    Apple
                  </button>
                </div>
              </div>

              <div className="auth-footer">
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="auth-link">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default SignUpPage
