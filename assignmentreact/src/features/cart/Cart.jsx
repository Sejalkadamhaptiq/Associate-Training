
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../../redux/cardSlice';
import '../../App.css'; // Make sure to add the new styles to this file

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  // --- Calculations ---
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingFee = subtotal > 500 || subtotal === 0 ? 0 : 50; // Example: Free shipping over $500
  const total = subtotal + shippingFee;

  const handleGoToPayment = () => {
    if (!isAuthenticated) {
      // Using a more specific message before redirecting
      alert("Please log in to proceed to checkout.");
      navigate("/signup");
    } else {
      navigate("/payment");
    }
  };

  // --- Enhanced Empty Cart View ---
  if (!cartItems.length) {
    return (
      <div className="container text-center empty-cart-container">
        <i className="bi bi-cart-x-fill empty-cart-icon"></i>
        <h2 className="mt-4">Your Cart is Empty</h2>
        <p className="text-muted">Looks like you haven't added anything to your cart yet.</p>
        <button onClick={() => navigate('/product')} className="btn btn-primary-custom mt-3">
          Continue Shopping
        </button>
      </div>
    );
  }

  // --- Main Cart View ---
  return (
    <div className="container my-5">
      <div className="row">
        {/* Cart Items Column */}
        <div className="col-lg-8">
          <h2 className="mb-4 fw-bold">Shopping Cart</h2>
          {cartItems.map(item => (
            <div key={item.id} className="card cart-item-card mb-3 shadow-sm">
              <div className="card-body">
                <div className="row g-3 align-items-center">
                  {/* Item Image */}
                  <div className="col-3 col-md-2">
                    <img src={item.thumbnail} alt={item.title} className="img-fluid rounded"/>
                  </div>
                  {/* Item Details */}
                  <div className="col-9 col-md-5">
                    <h5 className="mb-1 item-title">{item.title}</h5>
                    <p className="text-muted small mb-0">{item.category}</p>
                    <span className="fw-bold d-md-none d-block mt-2">${item.price.toFixed(2)}</span>
                  </div>
                  {/* Item Quantity Controls */}
                  <div className="col-6 col-md-3 d-flex align-items-center gap-2">
                    <button className="btn btn-outline-secondary btn-sm quantity-btn" onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                    <span className="fw-semibold mx-2">{item.quantity}</span>
                    <button className="btn btn-outline-secondary btn-sm quantity-btn" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  </div>
                   {/* Item Price and Remove Button */}
                  <div className="col-6 col-md-2 text-end">
                     <h5 className="fw-bold d-none d-md-block">${(item.price * item.quantity).toFixed(2)}</h5>
                     <button className="btn btn-link text-danger p-0 mt-1" onClick={() => dispatch(removeFromCart(item.id))}>
                        Remove
                     </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary Column */}
        <div className="col-lg-4">
          <div className="card shadow-sm order-summary-card">
            <div className="card-body">
              <h4 className="card-title fw-bold mb-4">Order Summary</h4>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Shipping</span>
                <strong>{shippingFee > 0 ? `$${shippingFee.toFixed(2)}` : 'Free'}</strong>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold fs-5 my-3">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="d-grid">
                 <button className="btn btn-primary-custom btn-lg" onClick={handleGoToPayment}>
                    Proceed to Checkout
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;