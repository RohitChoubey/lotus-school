import React from 'react';

const SocietyBankAccount = () => {
  // Replace these details with your society bank account information
  const bankDetails = {
    accountName: 'Your Society Name',
    bankName: 'Your Bank Name',
    accountNumber: '1234567890',
    ifscCode: 'ABCD0123456',
    branch: 'Your Branch Name',
  };

  // Replace this with the path to your QR code image
  const qrCodeImage = 'path-to-your-qr-code-image.png';

  return (
    <div className="container mt-5 mb-60">
      <div className="card shadow-lg border-0">
        <div className="card-header text-center py-4">
          <h1 className="card-title mb-0">Society Bank Account Details</h1>
        </div>
        <div className="card-body p-4">
          <div className="row">
            {/* Bank Details */}
            <div className="col-md-6">
              <div className="mb-4">
                <h4 className="text-primary mb-3">Account Information</h4>
                <div className="bg-light p-4 rounded">
                  <div className="mb-3">
                    <strong>Account Name:</strong> {bankDetails.accountName}
                  </div>
                  <div className="mb-3">
                    <strong>Bank Name:</strong> {bankDetails.bankName}
                  </div>
                  <div className="mb-3">
                    <strong>Account Number:</strong> {bankDetails.accountNumber}
                  </div>
                  <div className="mb-3">
                    <strong>IFSC Code:</strong> {bankDetails.ifscCode}
                  </div>
                  <div className="mb-3">
                    <strong>Branch:</strong> {bankDetails.branch}
                  </div>
                </div>
              </div>
            </div>

            {/* QR Code Image */}
            <div className="col-md-6 text-center">
              <div className="mb-4">
                <h4 className="text-primary mb-3">Scan QR Code for Payment</h4>
                <div className="bg-light p-4 rounded">
                  <img
                    src={qrCodeImage} // Replace with the path to your QR code image
                    alt="QR Code"
                    className="img-fluid rounded"
                    style={{ maxWidth: '200px' }}
                  />
                  <p className="mt-3 text-muted">UPI ID: your-upi-id@bank</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocietyBankAccount;