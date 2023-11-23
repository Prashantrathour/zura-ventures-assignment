const mongoose = require("mongoose");

const configSchema = mongoose.Schema({

  userID: String,
  user: String,
  time: {
    type: Date,
    default: Date.now,
  },
  
  primaryColor: String,
  fontSize: String,
  fontColor: String,
  chatHeight: String,
  showSources: Boolean,
 
  chatIconSize: String,
  distanceFromBottom: String,
  positionOnScreen:String,
  horizontalDistance: String,
  botIconImage: String,
});
const dispalyschema = mongoose.Schema({
  chatbotName: String,
  inputPlaceholder: String,
  welcomeMessage:String,
  userID:String,
  user:String
});
const configModel = mongoose.model("config", configSchema);
const displayModel = mongoose.model("display", dispalyschema);

module.exports = { configModel,displayModel };
