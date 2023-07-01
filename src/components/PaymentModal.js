import React, { useState } from 'react';

const PaymentModal = ({ user, onPaymentComplete }) => {
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform payment processing or API call here
    // You can add additional validation if needed

    // Call the onPaymentComplete callback to notify the parent component
    onPaymentComplete();
  };

  return (
    <div className="payment-modal">
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        {/* Additional payment input fields can be added here */}
        
        <button type="submit">Complete Payment</button>
      </form>
    </div>
  );
};

export default PaymentModal;
