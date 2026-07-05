import express from "express";

import {
    getProfile,
    updateProfile,
} from "../controllers/profileController.js";
import { protect } from "../middlewares/protect.js";

const router = express.Router();

router.route("/")
    .get(getProfile)
    .patch(protect, updateProfile);

export default router;