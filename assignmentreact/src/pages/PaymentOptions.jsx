import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card, Alert } from 'react-bootstrap';


const PaymentOptions = () => {
  const [selectedPayment, setSelectedPayment] = useState('');

  const handlePayment = () => {
    // This would trigger the final payment processing logic
    alert(`Processing payment with: ${selectedPayment.toUpperCase()}`);
  };

  const paymentOptions = [
    { id: 'card', label: 'Credit / Debit Card', icon: 'bi-credit-card-2-front' },
    { id: 'upi', label: 'UPI / QR Code', icon: 'bi-qr-code' },
    { id: 'netbanking', label: 'Net Banking', icon: 'bi-bank' },
    { id: 'cod', label: 'Cash on Delivery', icon: 'bi-cash-coin' }
  ];

  const renderPaymentDetails = () => {
    switch (selectedPayment) {
      case 'card':
        return (
          <Card className="p-4 animated-details">
            <h5 className="section-title mb-3">Enter Card Details</h5>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Card Number</Form.Label>
                <Form.Control type="text" placeholder="1234 5678 9012 3456" />
              </Form.Group>
              <Row>
                <Col md={7}>
                  <Form.Group className="mb-3">
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control type="text" placeholder="MM / YY" />
                  </Form.Group>
                </Col>
                <Col md={5}>
                  <Form.Group className="mb-3">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control type="password" placeholder="•••" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Card>
        );
      case 'upi':
        return (
          <Card className="p-4 text-center animated-details">
            <h5 className="section-title mb-3">Scan with any UPI App</h5>
            <img
              src="https://cdn.dummyjson.com/public/qr-code.png"
              alt="UPI QR Code"
              className="qr-code-img"
            />
            <p className="mt-3 text-muted small">Or enter UPI ID: my-store@upi</p>
          </Card>
        );
      case 'netbanking':
        return (
          <Card className="p-4 animated-details">
            <h5 className="section-title mb-3">Select Your Bank</h5>
            <Form.Group>
              <Form.Select>
                <option>Select from top banks...</option>
                <option>State Bank of India</option>
                <option>HDFC Bank</option>
                <option>ICICI Bank</option>
                <option>Axis Bank</option>
              </Form.Select>
            </Form.Group>
          </Card>
        );
      case 'cod':
        return (
           <Alert variant="success" className="animated-details">
              <Alert.Heading>Pay on Delivery</Alert.Heading>
              <p className="mb-0">
                You can pay with cash or UPI when your order is delivered to your doorstep.
              </p>
            </Alert>
        );
      default:
        return (
          <div className="p-4 text-center text-muted select-prompt">
            <i className="bi bi-wallet2 fs-1"></i>
            <p className="mt-2">Please select a payment method from the left.</p>
          </div>
        )
    }
  };

  return (
    <Container className="payment-container my-5">
      <Card className="p-4 shadow-lg border-0">
        <h2 className="text-center mb-4 fw-bold page-title">Choose How to Pay</h2>
        <Row className="g-4">
          {/* Left Column: Payment Method Selection */}
          <Col md={4}>
            <div className="payment-options-list">
              {paymentOptions.map(option => (
                <div
                  key={option.id}
                  className={`payment-option ${selectedPayment === option.id ? 'selected' : ''}`}
                  onClick={() => setSelectedPayment(option.id)}
                >
                  <Form.Check
                    type="radio"
                    id={`radio-${option.id}`}
                    name="paymentMethod"
                    checked={selectedPayment === option.id}
                    onChange={() => setSelectedPayment(option.id)}
                    className="d-none" // Hide the actual radio button
                  />
                  <label htmlFor={`radio-${option.id}`} className="d-flex align-items-center w-100">
                    <i className={`bi ${option.icon} fs-4 me-3`}></i>
                    <span className="fw-semibold">{option.label}</span>
                    <i className="bi bi-check-circle-fill ms-auto check-icon"></i>
                  </label>
                </div>
              ))}
            </div>
          </Col>

          {/* Right Column: Payment Details */}
          <Col md={8}>
            <div className="payment-details-panel">
              {renderPaymentDetails()}
            </div>
            <div className="text-end mt-4">
              <Button
                className="btn-finalize-payment"
                size="lg"
                onClick={handlePayment}
                disabled={!selectedPayment}
              >
                Pay Now
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default PaymentOptions;