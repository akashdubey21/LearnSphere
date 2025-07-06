"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./AuthPages.css";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5173/login", {
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
        alert(result.message || "Login failed");
        return;
      }

      alert("Login successful!");
      // TODO: Navigate to dashboard or store user in state/context
    } catch (err) {
      console.error("Login error:", err);
      alert("An error occurred during login");
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="auth-page">
      <Header />

      <main className="auth-main">
        <div className="auth-container">
          <div className="auth-form-container">
            <div className="auth-form">
              <div className="auth-header">
                <h1>Log In</h1>
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

                <div className="form-options">
                  <div className="checkbox-group">
                    <input
                      id="rememberMe"
                      name="rememberMe"
                      type="checkbox"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="checkbox"
                    />
                    <label htmlFor="rememberMe" className="checkbox-label">
                      Remember me
                    </label>
                  </div>
                  <Link to="/forgot-password" className="forgot-link">
                    Forgot password?
                  </Link>
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  Log In
                </button>
              </form>

              <div className="social-login">
                <div className="social-divider">Or Sign in</div>

                <div className="social-buttons-column">
                  <button className="btn btn-social btn-google">
                    <span className="social-icon google">G</span>
                    Sign with Google
                  </button>

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
              </div>

              <div className="auth-footer">
                <p>
                  Don't have an account?{" "}
                  <Link to="/signup" className="auth-link">
                    Create Account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;
