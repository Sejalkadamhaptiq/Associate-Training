import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';


const AboutUs = () => {
  const values = [
    { icon: 'bi-gem', title: 'Quality First', text: 'We source only the best products, ensuring top-tier quality and durability for our customers.' },
    { icon: 'bi-person-heart', title: 'Customer Focus', text: 'Your satisfaction is our priority. We are dedicated to providing exceptional service and support.' },
    { icon: 'bi-lightbulb', title: 'Innovation', text: 'We constantly seek out new and exciting products to bring you the latest trends and technology.' },
  ];

  return (
    <div className="about-us-page">
      {/* --- Hero Section --- */}
      <header className="about-hero text-center text-white">
        <Container>
          <h1 className="display-4 fw-bold">Our Story</h1>
          <p className="lead col-lg-8 mx-auto">
            From a small startup in Pune to a trusted online store, MyStore is built on a passion for quality and a commitment to our customers.
          </p>
        </Container>
      </header>

      <Container className="py-5">
        {/* --- Mission & Vision Section --- */}
        <Row className="g-4 my-5 align-items-center">
          <Col md={6}>
            <h2 className="section-heading">Our Mission</h2>
            <p className="text-muted">
              To simplify online shopping by curating a collection of high-quality, reliable products that enhance the lives of our customers. We aim to create a seamless and enjoyable shopping experience from Browse to delivery.
            </p>
          </Col>
          <Col md={6}>
             <Image src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop" fluid rounded className="shadow-lg" alt="Team discussing a project"/>
          </Col>
        </Row>

        {/* --- Our Values Section --- */}
        <div className="text-center my-5 py-5 bg-light rounded-3">
          <h2 className="section-heading mb-5">Our Core Values</h2>
          <Row>
            {values.map((value, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="value-card h-100">
                  <Card.Body>
                    <div className="value-icon mb-3">
                      <i className={`bi ${value.icon}`}></i>
                    </div>
                    <Card.Title as="h5" className="fw-bold">{value.title}</Card.Title>
                    <Card.Text className="text-muted small">{value.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;