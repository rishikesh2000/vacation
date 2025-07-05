import React from "react";
import "./PayNow.css";

const PayNow = () => {

  const handlePayNow = () => {
    const upiId = "7067272538@ptyes";
    const transactionNote = "Payment for Booking";

    const upiUrl = `upi://pay?pa=${upiId}&tn=${encodeURIComponent(transactionNote)}&cu=INR`;

    window.location.href = upiUrl;
  };

  return (
    <div className="pay-now-wrapper">
      <h1 className="title">Make a Payment</h1>

      <div className="card-container">
        <div className="payment-card qr-card">
          <h2>Scan & Pay</h2>
          <img
            src={require("../../Assests/QRScanner.jpeg")}
            alt="Scan QR Code"
            className="qr-image"
          />
          <p className="qr-instructions">
            Use any UPI app (PhonePe, Google Pay, Paytm) to scan this QR.
          </p>
          <div className="pay-now-button-container">
            <button onClick={handlePayNow} className="pay-now-button">
              Pay via UPI
            </button>
            <p className="upi-id">UPI ID: 7067272538@ptyes</p>
          </div>
        </div>

        <div className="payment-card bank-card">
          <h2>Bank Transfer</h2>
          <div className="bank-info">
            <p>
              <span>Account Holder:</span> Prince Rao
            </p>
            <p>
              <span>Account Number:</span> 40025374061
            </p>
            <p>
              <span>IFSC Code:</span> SBIN0004674
            </p>
            <p>
              <span>Bank Name:</span> State Bank of India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayNow;
