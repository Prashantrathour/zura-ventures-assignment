const mongoose = require("mongoose");

const projectschema = mongoose.Schema({
    name: String,
    userID:String,
    user:String,
    time: {
        type: Date,
        default: Date.now
    },
    episode: Number
});

const projectModel = mongoose.model("project", projectschema);

module.exports = { projectModel };
