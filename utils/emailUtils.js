const nodemailer = require('nodemailer');

// Create a transporter object using default SMTP transport (Gmail example)
const transporter = nodemailer.createTransport({
  service: 'gmail',  // Or use other services like SendGrid, Mailgun, etc.
  auth: {
    user: process.env.EMAIL_USER,  // Set in your .env file
    pass: process.env.EMAIL_PASS,  // Set in your .env file
  },
});

// Function to send email
const sendEmail = (to, subject, text, html) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,  // Sender address
    to,                            // List of recipients
    subject,                       // Subject line
    text,                          // Plain text body
    html,                          // HTML body
  };

  // Send email
  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
