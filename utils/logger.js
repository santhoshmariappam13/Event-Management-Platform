const winston = require('winston');

// Create a logger instance
const logger = winston.createLogger({
  level: 'info',  // Minimum level to log
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),  // Output logs to the console
    new winston.transports.File({ filename: 'combined.log' })  // Save logs to a file
  ],
});

// Function to log info messages
const logInfo = (message) => {
  logger.info(message);
};

// Function to log error messages
const logError = (message) => {
  logger.error(message);
};

module.exports = { logInfo, logError };
