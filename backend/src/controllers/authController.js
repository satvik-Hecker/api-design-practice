import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export const login = async (req,res)=> {
    try {
        const { email, password } = req.body;

        if(!email || !password){
            return res.status(400).json({ success: false, message: "Please provide email and password" });
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        const isMatch = await user.matchPassword(password);
        if(!isMatch){
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        const token = generateToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });
        res.json({ success: true, message: "Login successful" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
        console.log(error);
    }
}

export const logout = (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
    });

    res.status(200).json({
        success: true,
        message: "Logged out successfully",
    });
};