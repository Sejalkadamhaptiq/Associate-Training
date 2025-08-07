
import React from 'react';
import { Nav, Navbar as BsNavbar, Container, Badge, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../App.css'; // Import a dedicated CSS file for the navbar

const Navbar = () => {
  const navigate = useNavigate();

  // Get item counts from Redux store
  const wishlistCount = useSelector((state) => state.wishlist.items.length);
  const cartItems = useSelector((state) => state.cart.items);
  // Calculate total quantity in cart instead of just number of unique items
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);


  return (
    <BsNavbar expand="lg" className="app-navbar shadow-sm" sticky="top">
      <Container>
        {/* Brand/Logo - Use NavLink to make it a link to home */}
        <BsNavbar.Brand as={NavLink} to="/" className="navbar-brand-custom">
          MyStore
        </BsNavbar.Brand>

        {/* Toggle button for smaller screens */}
        <BsNavbar.Toggle aria-controls="main-navbar-nav" />

        {/* Collapsible Navbar content */}
        <BsNavbar.Collapse id="main-navbar-nav">
          {/* Main navigation links (left-aligned) */}
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/product" className="nav-link-custom">Products</Nav.Link>
          </Nav>

          {/* Icons and Logout button (right-aligned) */}
          <Nav className="align-items-center">
            <Nav.Link as={NavLink} to="/cart" className="nav-link-custom icon-link">
              <i className="bi bi-cart3 fs-5"></i>
              {cartItemCount > 0 && <Badge pill bg="danger" className="nav-badge">{cartItemCount}</Badge>}
            </Nav.Link>

            <Nav.Link as={NavLink} to="/wishlist" className="nav-link-custom icon-link">
              <i className="bi bi-heart fs-5"></i>
              {wishlistCount > 0 && <Badge pill bg="danger" className="nav-badge">{wishlistCount}</Badge>}
            </Nav.Link>

            <Button
              variant="outline-primary"
              size="sm"
              className="btn-logout ms-lg-3"
              onClick={() => navigate('/signup')} // Assuming logout is handled on the signup/login page
            >
              Logout
            </Button>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;