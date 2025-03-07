const express = require('express');
const { register, login, getUser, createUser } = require('../controllers/userController');  
const authMiddleware = require('../middleware/authMiddleware');  
const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.get('/profile', authMiddleware, getUser);  
router.get('/:id', getUser);  
router.post('/', createUser);  
module.exports = router; 
