// middleware/adminMiddleware.js
const User = require('../models/user');

const adminMiddleware = async (req, res, next) => {
  const user = await User.findById(req.userId);
  if (user.role !== 'admin') return res.status(403).json({ message: 'Access denied, admin only' });

  next();
};

module.exports = adminMiddleware;
