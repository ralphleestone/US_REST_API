require('dotenv').config();
const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const app = express();
const path = require("path");
const cors = require("cors");
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 3500;

// Connect to MongoDB
connectDB();

// Built-In json middleware
app.use(express.json());

// Cross origin resource sharing middleware
app.use(cors());

// Built in middleware
app.use(express.urlencoded({
    extended: false
}));

// Serve Static Files
app.use('/', express.static(path.join(__dirname, '/public')));

// Routes
app.use("/", require("./routes/root"));
app.use("/states", require("./routes/api/states"));

app.all("*", (req, res) => {
    res.status(404);
    if (req.accepts("html")) {
        res.sendFile(path.join(__dirname, "views", "404.html"));
    } else if (req.accepts("json")) {
        res.json({
            error: "404 not Found"
        });
    } else {
        res.type("txt").send("404 Not Found");
    }
});

app.use(errorHandler);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});