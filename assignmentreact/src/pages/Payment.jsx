import React from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Image,
  Badge,
  Alert,
  Button,
  Form,
  InputGroup
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Payment = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items) || [];

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const shippingFee = subtotal > 0 ? 15.00 : 0; // Example fixed shipping fee
  const taxes = subtotal * 0.08; // Example 8% tax
  const total = subtotal + shippingFee + taxes;

  const handleProceed = () => {
    // Here you would typically validate form inputs before proceeding
    navigate('/option'); // Redirect to payment options page
  };

  if (cartItems.length === 0) {
    return (
      <Container className="my-5">
        <Alert variant="info" className="text-center empty-state-container p-5">
          <i className="bi bi-cart-x-fill empty-state-icon"></i>
          <h2 className="mt-4 fw-bold">Your Cart is Empty</h2>
          <p className="text-muted">
            You need to add some products to your cart before you can checkout.
          </p>
          <Button onClick={() => navigate('/product')} className="btn-primary-custom mt-3">
            Browse Products
          </Button>
        </Alert>
      </Container>
    );
  }

  return (
    <div className="checkout-background">
      <Container className="checkout-container py-5">
        <h2 className="mb-5 text-center fw-bold page-title">Checkout</h2>

        <Row className="g-5">
          {/* Left Column: Shipping & Item Details */}
          <Col lg={7}>
            {/* Shipping Details Form */}
            <h4 className="mb-3 fw-semibold section-title">Shipping Address</h4>
            <Card className="p-4 mb-4 shadow-sm">
              <Form>
                <Row className="g-3">
                  <Col sm={6}>
                    <Form.Group controlId="firstName">
                      <Form.Label>First name</Form.Label>
                      <Form.Control type="text" placeholder="John" required />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group controlId="lastName">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control type="text" placeholder="Doe" required />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group controlId="address">
                      <Form.Label>Address</Form.Label>
                      <Form.Control type="text" placeholder="1234 Main St" required />
                    </Form.Group>
                  </Col>
                  <Col md={5}>
                     <Form.Group controlId="city">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="Pune" required />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="state">
                      <Form.Label>State</Form.Label>
                      <Form.Select defaultValue="Choose...">
                        <option>Maharashtra</option>
                        <option>Delhi</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group controlId="zip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control type="text" placeholder="411001" required />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card>

            {/* Cart Items Review */}
             <h4 className="mb-3 fw-semibold section-title">Review Your Items</h4>
            <Card className="p-2 shadow-sm">
                 <Table responsive className="checkout-table align-middle">
                  <thead>
                    <tr>
                      <th className="w-50">Product</th>
                      <th>Quantity</th>
                      <th className="text-end">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map(item => (
                      <tr key={item.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <Image src={item.thumbnail} className="me-3" rounded width={60} />
                            <div>
                                <p className="mb-0 fw-semibold">{item.title}</p>
                                <small className="text-muted">Price: ${item.price.toFixed(2)}</small>
                            </div>
                          </div>
                        </td>
                        <td className="text-center">{item.quantity}</td>
                        <td className="text-end fw-bold">${(item.quantity * item.price).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
            </Card>
          </Col>

          {/* Right Column: Order Summary */}
          <Col lg={5}>
            <div className="order-summary-card shadow-sm">
              <h4 className="d-flex justify-content-between align-items-center mb-4 section-title">
                <span>Order Summary</span>
                <Badge pill bg="primary" className="fs-6">{cartItems.length}</Badge>
              </h4>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item d-flex justify-content-between">
                  <span>Subtotal</span>
                  <strong>${subtotal.toFixed(2)}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Shipping</span>
                  <strong>${shippingFee.toFixed(2)}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Taxes (8%)</span>
                  <strong>${taxes.toFixed(2)}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between fs-5 fw-bold total-row">
                  <span>Total (USD)</span>
                  <span>${total.toFixed(2)}</span>
                </li>
              </ul>

              <Form className="mb-4">
                <InputGroup>
                  <Form.Control placeholder="Promo code" />
                  <Button variant="secondary">Redeem</Button>
                </InputGroup>
              </Form>

              <div className="d-grid">
                <Button className="btn-proceed" size="lg" onClick={handleProceed}>
                  Proceed to Payment Options
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Payment;