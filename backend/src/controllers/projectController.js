import Project from "../models/Project.js";

export const createProject = async (req, res) => {
    try {
        const { title, description, status, githubUrl, liveUrl, technologies, image, backgroundImage, order, highlights } = req.body;

        const newProject = new Project({
            title,
            description,
            status,
            githubUrl,
            liveUrl,
            technologies,
            image,
            backgroundImage,
            order,
            highlights
        });

        await newProject.save();
        res.status(201).json({
        success: true,
        message: "Project created successfully",
        data: newProject
    });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ order: 1 });
        res.status(200).json({
            success: true,
            data: projects
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateProject = async (req, res) => {
    try {
        
        const updatedProject = await Project.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { returnDocument: "after",
                runValidators: true 
            }
            );
        if (!updatedProject) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json({
            success: true,
            message: "Project updated successfully",
            data: updatedProject
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteProject = async (req, res) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id);
        if (!deletedProject) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json({
            success: true,
            message: "Project deleted successfully",
            data: deletedProject
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
