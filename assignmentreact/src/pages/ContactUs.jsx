import React from 'react';
import { Container, Row, Col, Form, Button, Card, Stack } from 'react-bootstrap';


const ContactUs = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank you for your message. We will get back to you shortly!');
    // Here you would typically handle form submission, e.g., send data to a server
  };

  return (
    <Container className="contact-us-page my-5 py-5">
      <Row className="g-5">
        {/* --- Left Column: Contact Info --- */}
        <Col md={5}>
          <h1 className="display-5 fw-bold page-title">Get in Touch</h1>
          <p className="text-muted mb-4">
            Have a question or a comment? Use the form to send us a message or contact us by mail, phone, or email.
          </p>

          <Stack gap={4} className="contact-details">
            <div className="d-flex align-items-start">
              <i className="bi bi-geo-alt-fill contact-icon"></i>
              <div>
                <h6 className="fw-semibold mb-0">Our Location</h6>
                <p className="text-muted mb-0">MyStore Office, Pune, Maharashtra, 411001</p>
              </div>
            </div>
            <div className="d-flex align-items-start">
              <i className="bi bi-telephone-fill contact-icon"></i>
              <div>
                <h6 className="fw-semibold mb-0">Phone Number</h6>
                <p className="text-muted mb-0">(+91) 987-654-3210</p>
              </div>
            </div>
            <div className="d-flex align-items-start">
              <i className="bi bi-envelope-fill contact-icon"></i>
              <div>
                <h6 className="fw-semibold mb-0">Email Address</h6>
                <p className="text-muted mb-0">support@mystore.com</p>
              </div>
            </div>
          </Stack>
        </Col>

        {/* --- Right Column: Contact Form --- */}
        <Col md={7}>
          <Card className="p-4 shadow-sm border-0">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="John" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Doe" required />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="you@example.com" required />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="How can we help you?" required />
                </Form.Group>
                <div className="d-grid">
                  <Button type="submit" className="btn-primary-custom" size="lg">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;