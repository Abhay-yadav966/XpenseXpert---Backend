const express = require("express");
const app = express();


const db = require("./config/database");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const PORT = process.env.PORT || 5000;


// middleware
app.use(express.json());
app.use(cors({
    origin: "",
    credentials:true,
}))

// connect Database
db.DBconnect();

// initialize the server
app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`)
})

// default route
app.get("/", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Your Server is up and Running....",
    });
});