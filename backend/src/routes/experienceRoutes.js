import express from "express";
import protect from "../middleware/authMiddleware.js";
import { createExperience, getExperiences, updateExperience, deleteExperience } from "../controllers/experienceController.js";

const router = express.Router();

router.route("/")
.get(getExperiences)
.post(protect,createExperience);

router.route("/:id")
.put(protect, updateExperience)
.delete(protect, deleteExperience);

export default router;