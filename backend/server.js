// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

// Initialize Express app
const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors({
    origin: 'http://localhost:5173', // Your React app's URL
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Define Routes
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));