// routes/auth.js
import express from "express";
import bcrypt from "bcryptjs";
import pool from '../db.js'; 

const router = express.Router();

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    // check if user already exists
    const existing = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (existing.rows.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // insert new user
    await pool.query("INSERT INTO users (email, password) VALUES ($1, $2)", [
      email,
      hashedPassword,
    ]);

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Error during registration:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

export default router;
