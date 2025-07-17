const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Razorpay = require('razorpay');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contact');
const paymentRoutes = require('./routes/paymentRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error(err));



app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/payment', paymentRoutes);


