import Profile from "../models/Profile.js";

export const getProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne();
        if (!profile) {
            return res.status(404).json({ message: "Profile not found" });
        }
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: "Error fetching profile", error });
    }
};

export const updateProfile = async (req, res) => {
    try {
        const updatedProfile = await Profile.findOneAndUpdate(
            {},
            req.body,
            { returnDocument: "after",
                runValidators: true,
                upsert: true
             }
        );
        if (!updatedProfile) {
            return res.status(404).json({ message: "Profile not found" });
        }
        res.status(200).json(updatedProfile);
    } catch (error) {
        res.status(500).json({ message: "Error updating profile", error });
    }
};
