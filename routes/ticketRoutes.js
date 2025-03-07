// routes/ticketRoutes.js
const express = require('express');
const { buyTicket } = require('../controllers/ticketController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, buyTicket);

module.exports = router;
