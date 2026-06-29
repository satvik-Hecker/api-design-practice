import mongoose from "mongoose";
import { trim } from "zod";

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,   
            required: true,
            trim: true,
            maxlength: 100,
        },

        description: {  
            type: String,
            required: true,
            trim: true,
            maxlength: 500,
        },
        
        status: {
            type: String,
            enum: ["live", "in-progress", "archived"],
            default: "in-progress",
        },
        githubUrl: {
            type: String,
            trim: true,
            default: "",
        },
        liveUrl: {
            type: String,
            trim: true,
            default: "",
        },
        technologies: {
            type: [String],
            trim: true,
            default: [],
        },
        image: {
            type: String,
            trim: true,
            default: "",
        },
        backgroundImage: {
            type: String,
            trim: true,
            default: "",
        },
        order: {
            type: Number,
            default: 0,
        },
        highlights: {
            type: [String],
            trim: true,
            default: [],
        }
    },
    {
        timestamps: true,
    }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;