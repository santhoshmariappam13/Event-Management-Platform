const express = require('express');
const { register, login, getUser, createUser } = require('../controllers/userController');  // Import controller functions
const authMiddleware = require('../middleware/authMiddleware');  // Protect getUser with middleware

const router = express.Router();

// POST /api/users/register - Register a new user
router.post('/register', register);

// POST /api/users/login - User login
router.post('/login', login);

// GET /api/users/profile - Get user details (protected route)
router.get('/profile', authMiddleware, getUser);  // Auth middleware ensures only logged-in users can access

// Define additional routes
router.get('/:id', getUser);  // This should be a function
router.post('/', createUser);  // This should be a function

module.exports = router;  // Correctly export the router instance