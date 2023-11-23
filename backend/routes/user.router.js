const express=require("express");
const { userModel } = require("../model/user.model");
const jwt =require("jsonwebtoken");
const { auth } = require("../Middleware/Auth.middleware");
const userrouter=express.Router()


  userrouter.post("/signup", async (req, res) => {
    const { username, email } = req.body;
  
    try {
     
      const existingUser = await userModel.findOne({ email });
  
      if (existingUser) {
    
      const token = jwt.sign(
            { userID: existingUser._id, user: existingUser.username },
            process.env.SECRATE
          );
        return res.status(200).json({ success: true, message: "User already exists. Logging in.", token });
      }
  
 
      const newUser = new userModel({ username, email });
      await newUser.save();
  
      
      const token = jwt.sign(
        { userID: newUser._id, user: newUser.username },
        process.env.SECRATE
      );
      return res.status(201).json({ success: true, message: "User created successfully.", token });
    } catch (error) {
    
      return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  });
  
 


  module.exports={userrouter}