const express = require('express');
const Student = require('../models/Student');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

// Add a new student
router.post('/', auth, upload.single('profileImage'), async (req, res, next) => {
  try {
    const { name, email, classId } = req.body;
    const profileImageUrl = req.file?.path;

    const student = new Student({ name, email, classId, profileImageUrl });
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    next(err);
  }
});

// Get all students
router.get('/', auth, async (req, res, next) => {
  try {
    const { classId, page = 1, limit = 10 } = req.query;

    const query = classId ? { classId, isDeleted: false } : { isDeleted: false };
    const students = await Student.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json(students);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
