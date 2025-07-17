const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const Payment = require('../models/Payment');

const router = express.Router();

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ✅ Create order
router.post('/orders', async (req, res) => {
  try {
    const options = {
      amount: 1 * 100, // 1 INR
      currency: 'INR',
      receipt: 'receipt_order_1'
    };
    const order = await instance.orders.create(options);
    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating order');
  }
});

// ✅ Verify payment and save to DB
router.post('/verify', async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, amount, currency } = req.body;

    // Signature verification
    const sign = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest('hex');

    if (razorpay_signature === expectedSignature) {
      // ✅ Save to MongoDB
      const payment = new Payment({
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
        signature: razorpay_signature,
        amount: amount,
        currency: currency
      });
      await payment.save();

      res.json({ success: true, message: 'Payment verified and saved!' });
    } else {
      res.status(400).json({ success: false, message: 'Invalid signature' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error verifying payment');
  }
});

module.exports = router;
