// routes/registrationRoutes.js
const express = require('express');
const { registerForEvent } = require('../controllers/registrationController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, registerForEvent);

module.exports = router;
