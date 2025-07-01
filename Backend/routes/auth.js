import express from 'express';
import pool from '../db.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    console.log('📥 Body received:', req.body);

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password required' });
    }

    const result = await pool.query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email',
      [email, password]
    );

    console.log('✅ Insert result:', result.rows[0]);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('🔥 Backend error during register:', error);

    if (error.code === '23505') {
      // PostgreSQL unique violation
      res.status(409).json({ message: 'Email already registered' });
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
});

export default router;
