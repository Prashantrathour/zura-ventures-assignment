const mongoose = require("mongoose");

const projectuploadschema = mongoose.Schema({
    name: String,
    userID:String,
    user: String,
    time: {
        type: String,
        default: Date.now
    },
    description: String
});

const projectuploadModel = mongoose.model("projectupload", projectuploadschema);

module.exports = { projectuploadModel };
