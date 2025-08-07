// // Home.js
// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import fashionImage from '../assets/banner-react.png';
// import '../App.css';

// const Home = () => {
//   return (
//     <div className="homepage" style={{ backgroundColor: '#FFF0EB' }}>

//       {/* Hero Section */}
//       <section className="hero-section py-5">
//         <Container>
//           <Row className="align-items-center flex-column-reverse flex-md-row">
//             <Col md={6} className="text-center text-md-start">
//               <h1 className="display-4 fw-bold text-gradient mb-4" style={{ color: '#333' }}>
//                 Discover Beauty in Every Bite, Thread & Glow
//               </h1>
//               <p className="lead text-muted">
//                 Welcome to your one-stop destination for gourmet indulgence, timeless fashion,
//                 and beauty that empowers. Explore curated collections made to elevate your everyday lifestyle.
//               </p>
//               <div className="d-flex flex-wrap gap-3 mt-4">
//                 <Link
//                   to="/product"
//                   className="btn px-4 py-2"
//                   style={{
//                     backgroundColor: '#F8C1C1',
//                     border: 'none',
//                     color: '#fff',
//                   }}
//                   onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#DC9F9F')}
//                   onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#F8C1C1')}
//                 >
//                   Explore Categories
//                 </Link>
//               </div>
//             </Col>
//             <Col md={6}>
//               <img
//                 src={fashionImage}
//                 alt="Lifestyle"
//                 className="img-fluid rounded-4 shadow"
//                 style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)' }}
//               />
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Category Cards */}
//       <section className="category-section py-5" style={{ backgroundColor: '#FFF0EB' }}>
//         <Container>
//           <h2 className="text-center fw-bold mb-5" style={{ color: '#333' }}>Shop by Category</h2>
//           <Row className="g-4 text-center">
//             {[
//               { icon: '🍽️', title: 'Gourmet Food', text: 'Taste premium selections of snacks, spices & sweets curated by chefs.' },
//               { icon: '👗', title: 'Fashion', text: 'Shop seasonal styles, from streetwear to couture-inspired designs.' },
//               { icon: '💄', title: 'Beauty', text: 'Skincare, makeup & wellness products that help you glow from within.' }
//             ].map((item, idx) => (
//               <Col md={4} key={idx}>
//                 <Card
//                   className="h-100 border-0 category-card"
//                   style={{
//                     backgroundColor: '#fff',
//                     boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
//                     borderRadius: '12px'
//                   }}
//                 >
//                   <Card.Body>
//                     <div className="icon mb-3 fs-1">{item.icon}</div>
//                     <Card.Title className="fw-bold" style={{ color: '#333' }}>{item.title}</Card.Title>
//                     <Card.Text className="text-muted">{item.text}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </section>

//       {/* Call to Action */}
//       <section
//         className="cta-section py-5 text-white text-center"
//         style={{ backgroundColor: '#E7918A' }}
//       >
//         <Container>
//           <h2 className="fw-bold mb-3">Unbox Your Lifestyle</h2>
//           <p className="lead">
//             Get exclusive deals, new arrivals & trend alerts delivered straight to your inbox.
//           </p>
//         </Container>
//       </section>

//     </div>
//   );
// };

// export default Home;
// Home.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/banner-react.png'; // Renamed for clarity
import '../App.css';

// A more refined color palette and font styles for a professional look
const styles = {
  primaryColor: '#071952',
  secondaryColor: '#37B7C3',
  lightBackground: '#F8F9FA',
  cardShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  cardHoverTransform: 'translateY(-5px)',
  fontFamily: "'Poppins', sans-serif", // Using a modern font
};

const Home = () => {
  return (
    <div style={{ backgroundColor: styles.lightBackground, fontFamily: styles.fontFamily }}>

      {/* Hero Section */}
      <section className="py-5" style={{ padding: '6rem 0' }}>
        <Container>
          <Row className="align-items-center flex-column-reverse flex-md-row">
            <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
              <h1 className="display-4 fw-bold mb-4" style={{ color: styles.primaryColor, lineHeight: '1.2' }}>
                Your Style, Your Story, Your Life.
              </h1>
              <p className="lead mb-4" style={{ color: '#555' }}>
                Welcome to your one-stop destination for curated collections in gourmet food, timeless fashion,
                and beauty. We help you elevate your everyday lifestyle with products that tell your story.
              </p>
              <Link
                to="/product"
                className="btn btn-lg px-4 py-3 fw-bold"
                style={{
                  backgroundColor: styles.secondaryColor,
                  border: 'none',
                  color: '#fff',
                  borderRadius: '50px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.primaryColor)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.secondaryColor)}
              >
                Start Shopping Now
              </Link>
            </Col>
            <Col md={6}>
              <img
                src={bannerImage}
                alt="Lifestyle products on display"
                className="img-fluid rounded-5 shadow-lg"
                style={{ transform: 'rotate(-5deg)', border: `8px solid #fff` }}
              />
            </Col>
          </Row>
        </Container>
      </section>



      {/* Category Cards */}
      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5" style={{ color: styles.primaryColor }}>
            Shop Our Curated Categories
          </h2>
          <Row className="g-4 text-center">
            {[
              { icon: '🍽️', title: 'Gourmet Food', text: 'Taste premium selections of snacks, spices, & sweets curated by chefs.' },
              { icon: '👚', title: 'Fashion & Apparel', text: 'Discover timeless fashion and accessories that define your unique style.' },
              { icon: '💄', title: 'Beauty & Skincare', text: 'Explore skincare, makeup, & wellness products that help you glow from within.' }
            ].map((item, idx) => (
              <Col md={4} key={idx}>
                <Card
                  className="h-100 border-0 category-card-improved"
                  style={{
                    backgroundColor: '#fff',
                    boxShadow: styles.cardShadow,
                    borderRadius: '16px',
                    transition: 'all 0.3s ease-in-out',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = styles.cardHoverTransform)}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <Card.Body className="p-4">
                    <div className="mb-3 fs-1 text-center">{item.icon}</div>
                    <Card.Title className="fw-bold fs-5 mb-2" style={{ color: styles.primaryColor }}>
                      {item.title}
                    </Card.Title>
                    <Card.Text style={{ color: '#777' }}>{item.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>


      {/* Call to Action */}
      <section
        className="cta-section py-5 text-center"
        style={{ backgroundColor: styles.secondaryColor, color: '#fff' }}
      >
        <Container>
          <h2 className="fw-bold mb-3">Join Our Community</h2>
          <p className="lead mb-4">
            Get exclusive deals, new arrivals & trend alerts delivered straight to your inbox.
          </p>
          <button
            className="btn btn-outline-light btn-lg px-5 py-3 fw-bold"
            style={{ borderRadius: '50px', borderColor: '#fff' }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#fff', e.currentTarget.style.color = styles.secondaryColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent', e.currentTarget.style.color = '#fff')}
          >
            Subscribe Now
          </button>
        </Container>
      </section>

    </div>
  );
};

export default Home;
