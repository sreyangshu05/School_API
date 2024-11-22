const express = require('express');
const Teacher = require('../models/Teacher');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

// Add a new teacher
router.post('/', auth, upload.single('profileImage'), async (req, res, next) => {
  try {
    const { name, email, subject } = req.body;
    const profileImageUrl = req.file?.path;

    const teacher = new Teacher({ name, email, subject, profileImageUrl });
    await teacher.save();
    res.status(201).json(teacher);
  } catch (err) {
    next(err);
  }
});

// Get all teachers with pagination
router.get('/', auth, async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const teachers = await Teacher.find({ isDeleted: false })
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json(teachers);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
