const mongoose=require("mongoose")


const connection = mongoose.connect(process.env.CLUSTER_URL)

module.exports={connection}