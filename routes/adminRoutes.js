// routes/adminRoutes.js
const express = require('express');
const adminMiddleware = require('../middleware/adminMiddleware');
const router = express.Router();

router.get('/manage-events', adminMiddleware, (req, res) => {
  res.status(200).json({ message: 'Admin-only event management' });
});

module.exports = router;
