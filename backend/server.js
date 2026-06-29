import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

dotenv.config();
app.use(helmet());
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    console.log("Portfolio API is running...");
    res.send("Portfolio API is running...");
});

export default app;