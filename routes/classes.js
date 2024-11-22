const express = require('express');
const Class = require('../models/Class');
const Teacher = require('../models/Teacher');
const auth = require('../middleware/auth');

const router = express.Router();

// Create a new class
router.post('/', auth, async (req, res, next) => {
  try {
    const { name, teacherId } = req.body;

    // Validate teacher existence
    const teacher = await Teacher.findById(teacherId);
    if (!teacher || teacher.isDeleted) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    const newClass = new Class({ name, teacherId });
    await newClass.save();
    res.status(201).json(newClass);
  } catch (err) {
    next(err);
  }
});

// Get all classes with pagination
router.get('/', auth, async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const classes = await Class.find()
      .populate('teacherId', 'name email subject')
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json(classes);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
