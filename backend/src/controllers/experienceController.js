import Experience from "../models/Experience.js";

export const createExperience = async(req,res) => {
    try {
        const { company, role,location, startDate, endDate, currentlyWorking, description, order, technologies, type } = req.body;

        const newExperience = new Experience({
            company,
            role,
            location,
            startDate,
            endDate,    
            currentlyWorking,
            description,
            order,
            technologies,
            type
        });

        await newExperience.save();
        res.status(201).json({
            success: true,
            message: "Experience created successfully",
            data: newExperience
        });
    }catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getExperiences = async(req,res) => {
    try {
        const experiences = await Experience.find().sort({ order: 1 }); 
        res.status(200).json({  
            success: true,
            data: experiences
        });
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateExperience = async(req,res) => {
    try {
        const updatedExperience = await Experience.findByIdAndUpdate(
            req.params.id,
            req.body,
            { returnDocument: "after",
                runValidators: true 
             }
        );
        if (!updatedExperience) {
            return res.status(404).json({ message: "Experience not found" });
        }
        res.status(200).json({
            success: true,
            message: "Experience updated successfully",
            data: updatedExperience
        });
    }catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteExperience = async(req,res) => {
    try {
        const deletedExperience = await Experience.findByIdAndDelete(req.params.id);
        if (!deletedExperience) {
            return res.status(404).json({ message: "Experience not found" });
        }
        res.status(200).json({
            success: true,
            message: "Experience deleted successfully"
        });
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};