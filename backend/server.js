import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import connectDB from "./src/config/db.js";
import dns from "node:dns/promises";
import cookieParser from "cookie-parser";
import projectRoutes from "./src/routes/projectRoutes.js";
import experienceRoutes from "./src/routes/experienceRoutes.js";
import profileRoutes from "./src/routes/profileRoutes.js";

dotenv.config();
dns.setServers(["1.1.1.1", "1.0.0.1"]);

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();


app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio API is running 🚀",
  });
});

app.use("/api/projects", projectRoutes);
app.use("/api/experiences", experienceRoutes);
app.use("/api/profile", profileRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

