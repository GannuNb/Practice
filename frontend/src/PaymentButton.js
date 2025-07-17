import React from 'react';
import axios from 'axios';

const PaymentButton = () => {
  const handlePayment = async () => {
    try {
      // 👉 1. Create order on backend
      const { data } = await axios.post('http://localhost:5000/payment/orders');

      // 👉 2. Setup Razorpay options
      const options = {
        key: "rzp_test_dKgP8VQJaHwf20", // ✅ Your Test Key ID
        amount: data.amount,
        currency: data.currency,
        name: "Ganesh Store",           // ✅ Your shop name
        description: "Pay ₹1",
        order_id: data.id,
        handler: async function (response) {
          // 👉 3. After payment success, verify on backend
          try {
            const verifyRes = await axios.post('http://localhost:5000/payment/verify', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              amount: data.amount,
              currency: data.currency
            });
            alert(verifyRes.data.message); // shows "Payment verified and saved!" if successful
          } catch (err) {
            console.error(err);
            alert("Verification failed!");
          }
        },
        prefill: {
          name: "Ganesh",                  // ✅ Your test name
          email: "nbganesh1818@gmail.com",// ✅ Your test email
          contact: "9346481093"           // ✅ Your test phone
        },
        theme: {
          color: "#3399cc",
        }
      };

      // 👉 4. Open Razorpay popup
      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.error("Order creation failed", error);
      alert("Unable to create order");
    }
  };

  return (
    <button className='m-5' onClick={handlePayment}>
      Pay ₹1 (Test)
    </button>
  );
};

export default PaymentButton;
