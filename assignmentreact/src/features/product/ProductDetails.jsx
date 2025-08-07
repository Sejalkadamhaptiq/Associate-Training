

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Badge,
  Accordion,
  Stack,
  Placeholder,
  Card
} from 'react-bootstrap';
import { toast } from 'react-toastify';

import { fetchProducts, fetchProductById } from '../../redux/productSlice';
import { addToCart } from '../../redux/cardSlice';
import { addToWishlist } from '../../redux/wishlistSlice';

// --- Skeleton Loader Component ---
const ProductDetailSkeleton = () => (
  <Container className="py-5">
    <Row>
      <Col md={6}>
        <Placeholder as={Card} animation="glow" className="main-image-placeholder"><Card.Body/></Placeholder>
        <Stack direction="horizontal" gap={2} className="mt-2">
          <Placeholder as={Card.Text} animation="glow"><div className="thumbnail-placeholder"/></Placeholder>
          <Placeholder as={Card.Text} animation="glow"><div className="thumbnail-placeholder"/></Placeholder>
          <Placeholder as={Card.Text} animation="glow"><div className="thumbnail-placeholder"/></Placeholder>
          <Placeholder as={Card.Text} animation="glow"><div className="thumbnail-placeholder"/></Placeholder>
        </Stack>
      </Col>
      <Col md={6}>
        <Placeholder as="p" animation="glow"><Placeholder xs={4} /></Placeholder>
        <Placeholder as="h2" animation="glow"><Placeholder xs={8} /></Placeholder>
        <Placeholder as="p" animation="glow"><Placeholder xs={6} /></Placeholder>
        <Placeholder as="p" animation="glow"><Placeholder xs={12} sm={10} /></Placeholder>
        <Stack direction="horizontal" gap={3} className="my-4">
           <Placeholder.Button variant="primary" xs={5} />
           <Placeholder.Button variant="secondary" xs={4} />
        </Stack>
        <Placeholder as="div" animation="glow"><div className="accordion-placeholder"/></Placeholder>
      </Col>
    </Row>
  </Container>
);

// --- Main Product Details Component ---
const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState('');
  const [relatedProducts, setRelatedProducts] = useState([]);

  const { items: allProducts } = useSelector((state) => state.products);
  const { selectedProduct: product, selectedProductStatus: status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductById(id));
    if (allProducts.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, id, allProducts.length]);

  useEffect(() => {
    if (product && allProducts.length > 0) {
      const related = allProducts
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
    if (product?.images?.length > 0) {
      setActiveImage(product.images[0]);
    }
  }, [product, allProducts]);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    toast.success(`${product.title} added to cart!`);
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
    toast.info(`${product.title} added to wishlist!`);
  };
  
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <>
        {'★'.repeat(fullStars)}
        {halfStar && '★'}
        {'☆'.repeat(emptyStars)}
      </>
    );
  };

  if (status === 'loading' || !product) return <ProductDetailSkeleton />;
  if (status === 'failed') return <p className="text-center py-5">Failed to load product.</p>;

  return (
    <Container className="py-5">
      <Row className="g-5">
        {/* --- Product Image Gallery --- */}
        <Col md={6}>
          <Image
              src={product.image || product.thumbnail}
  alt={product.title}
  className="img-fluid rounded"
  style={{ maxHeight: '400px', maxWidth: '400px', objectFit: 'contain' }}
          />
          <Stack direction="horizontal" gap={2} className="thumbnail-list">
            {product.images.slice(0, 5).map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className={`thumbnail-item ${img === activeImage ? 'active' : ''}`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </Stack>
        </Col>

        {/* --- Product Info Panel --- */}
        <Col md={6} className="product-info-panel">
          <Badge pill bg="light" text="dark" className="product-category">{product.category}</Badge>
          <h2 className="product-title">{product.title}</h2>
          <p className="product-brand">{product.brand}</p>

          <Stack direction="horizontal" gap={3} className="align-items-center mb-3">
            <h3 className="product-price mb-0">${product.price.toFixed(2)}</h3>
            <del className="text-muted">${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}</del>
            <Badge pill bg="danger">{product.discountPercentage}% OFF</Badge>
          </Stack>

          <Stack direction="horizontal" gap={3} className="align-items-center mb-4">
            <div className="product-rating text-warning">{renderStars(product.rating)} ({product.rating})</div>
            <div className="vr" />
            <Badge bg="success">In Stock</Badge>
          </Stack>

          <p className="product-description">{product.description}</p>

          <div className="d-flex align-items-center gap-3 my-4">
            <strong>Quantity:</strong>
            <Button variant="outline-secondary" size="sm" onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</Button>
            <span className="fw-semibold fs-5">{quantity}</span>
            <Button variant="outline-secondary" size="sm" onClick={() => setQuantity(q => q + 1)}>+</Button>
          </div>

          <Stack direction="horizontal" gap={3}>
            <Button className="btn-add-to-cart" size="lg" onClick={handleAddToCart}>
              <i className="bi bi-cart-plus-fill me-2"></i>Add to Cart
            </Button>
            <Button variant="outline-danger" className="btn-wishlist" size="lg" onClick={handleAddToWishlist}>
              <i className="bi bi-heart"></i>
            </Button>
          </Stack>
        </Col>
      </Row>

      {/* --- Details Accordion & Reviews --- */}
      <Row className="mt-5 pt-4 border-top">
        <Col lg={7}>
            <h3 className="section-title mb-3">Product Details</h3>
            <Accordion defaultActiveKey="0" flush className="product-accordion">
                {['warrantyInformation', 'shippingInformation', 'returnPolicy'].map((key, i) => (
                    <Accordion.Item eventKey={i.toString()} key={key}>
                        <Accordion.Header>{key.replace(/([A-Z])/g, ' $1').trim()}</Accordion.Header>
                        <Accordion.Body>{product[key]}</Accordion.Body>
                    </Accordion.Item>
                ))}
                <Accordion.Item eventKey="3">
                  <Accordion.Header>QR Code</Accordion.Header>
                  <Accordion.Body>
                    {product.meta?.qrCode && <Image src={product.meta.qrCode} alt="Product QR Code" className="qr-code-image" />}
                  </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Col>
        <Col lg={5} className="mt-5 mt-lg-0">
             <h3 className="section-title mb-3">Customer Reviews ({product.reviews.length})</h3>
             <div className="reviews-container">
                {product.reviews.length > 0 ? product.reviews.slice(0, 3).map((review, index) => (
                    <Card key={index} className="review-card">
                        <Card.Body>
                           <div className="d-flex justify-content-between align-items-center">
                              <Card.Title as="h6">{review.reviewerName}</Card.Title>
                              <div className="review-rating">{renderStars(review.rating)}</div>
                           </div>
                           <Card.Text className="fst-italic text-muted">“{review.comment}”</Card.Text>
                           <small className="text-secondary">{new Date(review.date).toLocaleDateString()}</small>
                        </Card.Body>
                    </Card>
                )) : <p className="text-muted">No reviews yet.</p>}
             </div>
        </Col>
      </Row>

      {/* --- Related Products --- */}
      <div className="related-products-section">
        <h2 className="text-center section-title">You May Also Like</h2>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {relatedProducts.length > 0 ? relatedProducts.map((item) => (
            <Col key={item.id}>
              <Card className="h-100 product-card-related">
                 <Link to={`/product/${item.id}`}>
                    <Card.Img variant="top" src={item.thumbnail} className="related-product-img"/>
                 </Link>
                 <Card.Body>
                    <Card.Title as="h6" className="related-product-title">{item.title}</Card.Title>
                    <Card.Text className="fw-bold">${item.price}</Card.Text>
                 </Card.Body>
                 <Card.Footer>
                    <Button as={Link} to={`/product/${item.id}`} variant="outline-dark" className="w-100">View Details</Button>
                 </Card.Footer>
              </Card>
            </Col>
          )) : <p className="text-center text-muted col-12">No recommendations available.</p>}
        </Row>
      </div>
    </Container>
  );
};

export default ProductDetails;
