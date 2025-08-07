import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="app-footer">
      <Container>
        {/* --- Main Footer Content --- */}
        <Row className="footer-main gy-4">
          {/* Column 1: Brand and About */}
          <Col lg={4} md={6}>
            <h5 className="footer-brand">MyStore</h5>
            <p className="footer-about-text">
              Your one-stop shop for the best products online. We are committed to providing quality and value to our customers in Pune and across India.
            </p>
          </Col>

          {/* Column 2: Quick Links */}
          <Col lg={2} md={3} xs={6}>
            <h6 className="footer-title">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/product">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>

          {/* Column 3: Help & Support */}
          <Col lg={3} md={3} xs={6}>
             <h6 className="footer-title">Support</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="#">FAQ</Link></li>
              <li><Link to="#">Shipping Info</Link></li>
              <li><Link to="#">Return Policy</Link></li>
              <li><Link to="/payment">Payment Options</Link></li>
            </ul>
          </Col>

          {/* Column 4: Contact and Socials */}
          <Col lg={3} md={12} className="text-md-start text-lg-start">
             <h6 className="footer-title">Connect With Us</h6>
             <p>Pune, Maharashtra, India</p>
             <Stack direction="horizontal" gap={3} className="social-icons">
                <a href="#twitter" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                <a href="#facebook" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                <a href="#instagram" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                <a href="#linkedin" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
             </Stack>
          </Col>
        </Row>

        {/* --- Footer Bottom Bar --- */}
        <div className="footer-bottom">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} MyStore. All Rights Reserved.
          </p>
          <Stack direction="horizontal" gap={3} className="footer-legal-links">
             <Link to="/privacy-policy">Privacy</Link>
             <Link to="/terms-of-service">Terms</Link>
             <Link to="/support">Support</Link>
          </Stack>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;