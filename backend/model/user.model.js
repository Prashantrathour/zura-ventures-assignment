const mongoose=require("mongoose")


const userschema=mongoose.Schema({
    username:String,
    email:String
})

const userModel=mongoose.model("user",userschema)

module.exports={userModel}