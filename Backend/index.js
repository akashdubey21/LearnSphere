import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js"; // include `.js` for ES Modules

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 5000;
app.use(cors({
  origin: 'http://localhost:5000',
  credentials: true
}));
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
