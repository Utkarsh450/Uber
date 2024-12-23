const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectToDb = require("./db/db"); // Import database connection


app.use(cors());

// Connect to the database
connectToDb();

app.get("/", (req, res) => {
    res.send("Hi");
});

module.exports = app;
