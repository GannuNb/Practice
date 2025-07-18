const express = require('express');
const router = express.Router();
const multer = require('multer');
const Booking = require('../models/Booking');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

// Multer setup to accept 'photo' and 'pdf' fields
const storage = multer.memoryStorage();
const upload = multer().fields([
  { name: 'photo', maxCount: 1 },
  { name: 'pdf', maxCount: 1 }
]);

// Verify JWT middleware
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization; // expect: 'Bearer <token>'
  if (!authHeader) return res.status(401).json({ error: 'No token provided' });

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Malformed token' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Invalid token' });
    req.userId = decoded.id;
    next();
  });
};

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // App Password recommended
  },
});

// POST /api/bookings/book
router.post('/book', verifyToken, upload, async (req, res) => {
  try {
    console.log('Received body:', req.body);
    console.log('Received files:', req.files);

    const { name, phone, email, place, message } = req.body;
    const userId = req.userId;

    if (!name || !phone || !email || !place) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Extract photo and pdf files from req.files
    const photoFile = req.files['photo'] ? req.files['photo'][0] : null;
    const pdfFile = req.files['pdf'] ? req.files['pdf'][0] : null;

    // Save booking with user ID + files
    const newBooking = new Booking({
      user: userId,
      name,
      phone,
      email,
      place,
      message,
      photo: photoFile
        ? {
            data: photoFile.buffer,
            contentType: photoFile.mimetype,
          }
        : undefined,
      pdf: pdfFile
        ? {
            data: pdfFile.buffer,
            contentType: pdfFile.mimetype,
          }
        : undefined,
    });

    await newBooking.save();
    console.log('Booking saved to DB.');

    // Send confirmation email with PDF attached (if pdf exists)
    const mailOptions = {
      to: email,
      from: process.env.EMAIL_USER,
      subject: `Thanks for booking, ${name}!`,
      html: `
        <p>Hi ${name},</p>
        <p>Your trip to <strong>${place}</strong> has been booked.</p>
        <p>We will contact you shortly. 😊</p>
      `,
      attachments: pdfFile
        ? [
            {
              filename: pdfFile.originalname,
              content: pdfFile.buffer,
              contentType: pdfFile.mimetype,
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);

    console.log('Confirmation email sent.');
    res.status(201).json({ message: 'Booking saved & confirmation email sent.' });
  } catch (err) {
    console.error('Booking Error:', err);
    res.status(500).json({ error: err.message || 'Internal server error' });
  }
});


router.get('/mybookings', verifyToken, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json({ bookings });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});


module.exports = router;
