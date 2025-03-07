const mongoose = require('mongoose');
require('dotenv').config();  // To load the .env variables

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, );
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);  // Exit the process if DB connection fails
  }
};

// Export the connectDB function
module.exports = connectDB;
