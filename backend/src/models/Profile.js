import mongoose from "mongoose";

const profileSchema = new mongoose.Schema( 
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100,
        },

        tagline: {
            type: String,
            trim: true,
            maxlength: 200,
        },
        
        shortBio: {
            type: String,
            trim: true,
            maxlength: 500,
        },
        about: {
            type: String,
            trim: true,
        },

        profileImage: {
            type: String,
            default: "",
            trim: true,
        },
        resumeUrl: {
            type: String,
            default: "",
            trim: true,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
        },
        location: {
            type: String,
            trim: true,
        },
        availableForHire: {
            type: Boolean,
            default: true,
        },
    
    },
    {
        timestamps: true,
    }
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;