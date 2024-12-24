const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectToDb = require("./db/db"); // Import database connection
const userRoutes = require("./routes/userRoutes");


app.use(cors());

// Connect to the database
connectToDb();

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.get("/", (req, res) => {
    res.send("Hi");
});

app.use("/users",userRoutes);

module.exports = app;
