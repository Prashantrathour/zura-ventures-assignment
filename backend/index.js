const express = require("express");
const cors = require("cors");
const env = require("dotenv");
env.config();
const { userrouter } = require("./routes/user.router");
const { connection } = require("./config/db");
const { projectrouter } = require("./routes/project.router");
const app = express();

app.use(express.json());
app.use(cors());

// Corrected the route by adding a forward slash before "user"
app.use("/user", userrouter);
app.use("/project", projectrouter);

app.listen(process.env.PORT, async() => {
    try {
        await connection
        console.log("database connected")
    } catch (error) {
        
    }
    console.log("listening on port" + process.env.PORT);
});
