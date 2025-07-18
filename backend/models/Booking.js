const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: String,
  phone: String,
  email: String,
  place: String,
  message: String,
  photo: {
    data: Buffer,
    contentType: String,
  },
  pdf: {
    data: Buffer,
    contentType: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
