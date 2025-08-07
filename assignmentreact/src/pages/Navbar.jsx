// // import React from 'react';
// // import { Nav, Navbar as BsNavbar, Container } from 'react-bootstrap';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { useSelector } from 'react-redux';

// // const Navbar = () => {
// //   const navigate = useNavigate();
// //   const wishlistCount = useSelector((state) => state.wishlist.items.length);

// //   return (
// //     <BsNavbar expand="md" bg="light" variant="light">
// //       <Container>
// //         {/* Brand or Logo (optional) */}
// //         <BsNavbar.Brand className="fw-bold text-uppercase">
// //           MyStore
// //         </BsNavbar.Brand>

// //         {/* Hamburger toggle button */}
// //         <BsNavbar.Toggle aria-controls="main-navbar-nav" />

// //         {/* Collapsible Nav Items */}
// //         <BsNavbar.Collapse id="main-navbar-nav">
// //           <Nav className="mx-auto fw-semibold text-center" style={{ gap: '1.5rem' }}>
// //             <Nav.Link as={Link} to="/" style={{ color: '#b17e4e' }}>
// //               Home
// //             </Nav.Link>
// //             <Nav.Link as={Link} to="/product" style={{ color: '#b17e4e' }}>
// //               Product
// //             </Nav.Link>
// //             <Nav.Link as={Link} to="/cart" style={{ color: '#b17e4e' }}>
// //               Cart
// //             </Nav.Link>
// //             <Nav.Link as={Link} to="/wishlist" style={{ color: '#b17e4e' }}>
// //               ❤️ Wishlist ({wishlistCount})
// //             </Nav.Link>
// //             <button
// //               onClick={() => navigate('/logout')}
// //               className="btn btn-danger btn-sm ms-md-3 mt-2 mt-md-0"
// //             >
// //               Logout
// //             </button>
// //           </Nav>
// //         </BsNavbar.Collapse>
// //       </Container>
// //     </BsNavbar>
// //   );
// // };

// // export default Navbar;
// import React from 'react';
// import { Nav, Navbar as BsNavbar, Container } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const wishlistCount = useSelector((state) => state.wishlist.items.length);

//   return (
//     <BsNavbar expand="md" style={{ backgroundColor: '#FFF0EB' }}>
//       <Container>
//         {/* Brand or Logo */}
//         <BsNavbar.Brand className="fw-bold text-uppercase" style={{ color: '#B17E4E' }}>
//           MyStore
//         </BsNavbar.Brand>

//         {/* Hamburger toggle button */}
//         <BsNavbar.Toggle aria-controls="main-navbar-nav" />

//         {/* Collapsible Nav Items */}
//         <BsNavbar.Collapse id="main-navbar-nav">
//           <Nav className="mx-auto fw-semibold text-center align-items-center" style={{ gap: '1.5rem' }}>
//             {[
//               { to: '/', label: 'Home' },
//               { to: '/product', label: 'Product' },
//               { to: '/cart', label: 'Cart' },
//               { to: '/wishlist', label: `❤️ Wishlist (${wishlistCount})` },
//             ].map(({ to, label }, index) => (
//               <Nav.Link
//                 key={index}
//                 as={Link}
//                 to={to}
//                 style={{
//                   color: '#B17E4E',
//                   transition: 'color 0.3s',
//                 }}
//                 onMouseOver={(e) => (e.target.style.color = '#8F6240')}
//                 onMouseOut={(e) => (e.target.style.color = '#B17E4E')}
//               >
//                 {label}
//               </Nav.Link>
//             ))}

//             {/* Logout button */}
//             <button
//               onClick={() => navigate('/logout')}
//               className="btn btn-sm mt-2 mt-md-0"
//               style={{
//                 backgroundColor: '#F8C1C1',
//                 border: 'none',
//                 color: '#fff',
//                 padding: '6px 12px',
//               }}
//               onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#DC9F9F')}
//               onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#F8C1C1')}
//             >
//               Logout
//             </button>
//           </Nav>
//         </BsNavbar.Collapse>
//       </Container>
//     </BsNavbar>
//   );
// };

// export default Navbar;
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