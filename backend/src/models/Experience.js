import mongoose from "mongoose";


const experienceSchema = new mongoose.Schema(
    {
        company: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100,
        },

        role: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100,
        },

        location: {
            type: String,
            trim: true,
            default: "",
        },

        startDate: {
            type: Date,
            required: true,
        },

        endDate: {
            type: Date,
        },

        currentlyWorking: {
            type: Boolean,
            default: false,
        },

        description: [
            {
                type: String,
                trim: true,
            }
        ],

        order: {
            type: Number,
            default: 0,
        },

        technologies: [
            {
                type: String,
                trim: true,
            }
        ],

        type: {
            type: String,
            enum: ["internship", "full-time", "leadership", "freelance"],
            default: "internship",
        },
    },
    {
        timestamps: true,
    }
);

const Experience = mongoose.model("Experience", experienceSchema);

export default Experience;