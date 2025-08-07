
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { removeFromWishlist } from '../../redux/wishlistSlice';
import { addToCart } from '../../redux/cardSlice'; // Correctly named, assuming 'cardSlice' is your cart slice
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import '../../App.css'; // Ensure you have the corresponding styles

const Wishlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistItems = useSelector(state => state.wishlist.items);
  const cartItems = useSelector(state => state.cart.items); // Get cart items to check if item is already in cart

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success(`${item.title} added to cart!`);
  };

  const handleRemoveFromWishlist = (itemId, itemTitle) => {
    dispatch(removeFromWishlist(itemId));
    toast.info(`${itemTitle} removed from wishlist.`);
  };

  // --- Enhanced Empty Wishlist View ---
  if (!wishlistItems.length) {
    return (
      <div className="container text-center empty-state-container">
        <i className="bi bi-heartbreak-fill empty-state-icon text-danger"></i>
        <h2 className="mt-4 fw-bold">Your Wishlist is Empty</h2>
        <p className="text-muted">Explore our products and save your favorites to view them here.</p>
        <Button onClick={() => navigate('/')} className="btn-primary-custom mt-3">
          Discover Products
        </Button>
      </div>
    );
  }

  return (
    <Container className="py-5">
      <h2 className="mb-4 fw-bold page-title text-center">Your Wishlist</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {wishlistItems.map(item => {
          const isInCart = cartItems.some(cartItem => cartItem.id === item.id);

          return (
            <Col key={item.id}>
              <Card className="h-100 wishlist-card">
                {/* --- Remove Button (Top Right Corner) --- */}
                <Button
                  variant="link"
                  className="btn-remove-from-wishlist"
                  onClick={() => handleRemoveFromWishlist(item.id, item.title)}
                  aria-label="Remove from wishlist"
                >
                  <i className="bi bi-x-lg"></i>
                </Button>

                <Link to={`/product/${item.id}`} className="text-decoration-none">
                  <div className="wishlist-card-img-container">
                    <Card.Img variant="top" src={item.thumbnail} />
                  </div>
                </Link>

                <Card.Body className="d-flex flex-column">
                  <div className="flex-grow-1">
                     <Link to={`/product/${item.id}`} className="text-decoration-none">
                        <Card.Title className="wishlist-card-title">
                           {item.title}
                        </Card.Title>
                     </Link>
                    <Card.Text className="fw-bold fs-5 mb-3 text-dark">
                      ${item.price.toFixed(2)}
                    </Card.Text>
                  </div>

                  {/* --- Add to Cart Button (conditionally rendered) --- */}
                  <div className="mt-auto">
                    {isInCart ? (
                       <Button
                        style={{backgroundColor:'#37B7C3'}}
                        className="w-100 fw-semibold"
                        onClick={() => navigate('/cart')}
                      >
                        <i className="bi bi-check-lg me-2"></i>In Cart
                      </Button>
                    ) : (
                      <Button
                        className="btn-primary-custom w-100 fw-semibold"
                        onClick={() => handleAddToCart(item)}
                      >
                        <i className="bi bi-cart-plus me-2"></i>Add to Cart
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Wishlist;