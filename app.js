const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const studentRoutes = require('./routes/students');
const teacherRoutes = require('./routes/teachers');
const classRoutes = require('./routes/classes');

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/classes', classRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});

module.exports = app;
