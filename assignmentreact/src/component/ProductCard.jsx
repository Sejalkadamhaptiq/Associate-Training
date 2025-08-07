

import React, { useState } from 'react';
import { Card, Button, Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from "../redux/cardSlice";
import { addToWishlist } from "../redux/wishlistSlice";
import { toast } from 'react-toastify';


const ProductCard = ({ product }) => {
  const dispatch = useDispatch();


  if (!product) return null;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
     toast.success(`${product.title} added to cart!`, { autoClose: 1500 });
   
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
  };

  const inStock = product.stock > 0;

  return (
    <>
      <Card
        className="h-100 position-relative"
        style={{
          boxShadow: '0 4px 12px rgba(243, 239, 239, 0.64)',
          border: 'none',
        }}
      >
        {product.thumbnail && (
          <Link to={`/product/${product.id}`}>
            <Card.Img
              variant="top"
              src={product.thumbnail}
              alt={product.title}
             
            />
          </Link>
        )}
        <Card.Body className="d-flex flex-column gap-2">
          <Card.Title className="fw-bold">{product.title}</Card.Title>

          <Card.Text className="mb-1 text-muted fw-semibold">
            ${product.price}
          </Card.Text>

          <Card.Text className="mb-1">
            ⭐ {product.rating || 'No rating'}
          </Card.Text>

          <Card.Text className="mb-2">
            <Badge
             
              style={{
                  backgroundColor: '#088395',
                color: '#fff',
              }}
            >
              {inStock ? 'In Stock' : 'Out of Stock'}
            </Badge>
          </Card.Text>

          <div className="d-flex flex-md-column flex-column flex-sm-column flex-lg-row gap-2 mt-auto">
            <Button
              onClick={handleAddToCart}
              className="flex-fill p-2"
              disabled={!inStock}
              style={{
                backgroundColor: '#088395',
                border: 'none',
                color: '#ffff',
                fontSize:'15px'
              }}
             
            >
              Add to Cart
            </Button>
            <Button
              onClick={handleAddToWishlist}
              className="flex-fill p-2"
              style={{
                backgroundColor: '#EBF4F6',
                border: 'none',
                color: '#000',
                fontSize:'15px'
              }}
        
            >
              Add to Wishlist
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
