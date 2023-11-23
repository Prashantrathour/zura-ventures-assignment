const express = require("express");
const { projectModel } = require("../model/project.model");
const { projectuploadModel } = require("../model/projectupload.model");
const { auth } = require("../Middleware/Auth.middleware");
const { configModel, displayModel } = require("../model/Configuration.model");

const projectrouter = express.Router();
projectrouter.use(auth);
// POST endpoint to create a new project
projectrouter.post("/create", async (req, res) => {
  const { name, episode, user, userID } = req.body;

  try {
    // Check if required fields are provided
    if (!name || !episode) {
      return res
        .status(400)
        .json({ success: false, message: "Name and episode are required." });
    }

    const newProject = new projectModel({ name, episode, user, userID });
    await newProject.save();

    return res
      .status(201)
      .json({ success: true, message: "Project created successfully." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});
projectrouter.post("/upload", async (req, res) => {
  const { name, description, time, user, userID } = req.body;

  try {
    // Check if required fields are provided
    if (!name || !description) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Name and description are required.",
        });
    }

    const newProject = new projectuploadModel({
      name,
      description,
      time,
      user,
      userID,
    });
    await newProject.save();

    return res
      .status(201)
      .json({ success: true, message: "Project upload successfully." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

// GET endpoint to retrieve all projects
projectrouter.get("/", async (req, res) => {
  const { userID } = req.body;
  try {
    const projects = await projectModel.find({ userID: userID });
    return res.status(200).json({ success: true, data: projects });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});
projectrouter.get("/getupload", async (req, res) => {
  const { userID } = req.body;
  try {
    const projects = await projectuploadModel.find({ userID: userID });
    return res.status(200).json({ success: true, data: projects });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

projectrouter.delete("/delete/:id", async (req, res) => {
  const projectId = req.params.id;
  
  try {
    // Check if the provided ID is valid
    if (!projectId) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid projectId." });
    }

    // Find and remove the user by ID
    const deletedproject = await projectuploadModel.findByIdAndDelete(
      projectId
    );

    if (!deletedproject) {
      return res
        .status(404)
        .json({ success: false, message: "project not found." });
    }

    return res
      .status(200)
      .json({ success: true, message: "Project deleted successfully." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

projectrouter.put("/update/:id", async (req, res) => {
  const projectId = req.params.id;
  const { description } = req.body;

  try {
    // Check if the provided ID is valid
    if (!projectId) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid project ID." });
    }

    // Find the project by ID and update the description
    const updatedProject = await projectuploadModel.findByIdAndUpdate(
      projectId,
      { $set: { description } },
      { new: true }
    );

    if (!updatedProject) {
      return res
        .status(404)
        .json({ success: false, message: "Project not found." });
    }

    return res
      .status(200)
      .json({
        success: true,
        message: "Project description updated successfully.",
        data: updatedProject,
      });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

projectrouter.post("/config", async (req, res) => {


  try {
    const {
      userID,
      user,
    } = req.body;

    // Validate required fields
    if (!userID || !user) {
      return res.status(400).json({ error: "user not authenticate" });
    }

    // Create a new project instance
    const newProject = new configModel(req.body);

    // Save the project to the database
    const savedProject = await newProject.save();

    res.status(201).json({ message: "DATA saved successfully",savedProject });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
projectrouter.post("/general", async (req, res) => {
  console.log(req.body)
  try {
    const {
      userID,
      user,
      chatbotName,

      inputPlaceholder,

      welcomeMessage,
    } = req.body;

    // Validate required fields
    if (!userID || !user) {
      return res.status(400).json({ error: "user not authenticate" });
    }

    // Create a new project instance
    const newProject = new displayModel({
      userID,
      user,
      chatbotName,
      inputPlaceholder,
      welcomeMessage
    });

    // Save the project to the database
    const savedProject = await newProject.save();

    res.status(201).json({ message: "DATA saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
module.exports = { projectrouter };
