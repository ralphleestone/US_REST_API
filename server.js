require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3500;
const connectDB = require('./config/dbConn');

// Connect MongoDB
connectDB();

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log('Server running on port ${PORT}'));
});