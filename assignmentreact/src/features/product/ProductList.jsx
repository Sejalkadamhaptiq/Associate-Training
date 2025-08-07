

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchCategories } from '../../redux/productSlice';
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Dropdown,
  Card,
  Spinner,
  Alert,
  Placeholder,
} from 'react-bootstrap';
import ProductCard from '../../component/ProductCard';
import '../../App.css';

// Skeleton component for a better loading experience
const ProductSkeleton = () => (
  <Col>
    <Card className="h-100">
      <Card.Body className="d-flex flex-column">
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={8} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder xs={4} bg="primary" className="mt-auto" />
      </Card.Body>
    </Card>
  </Col>
);

const ProductList = () => {
  const dispatch = useDispatch();
  const { items: products, status } = useSelector((state) => state.products);
  const { categories, categoryStatus } = useSelector((state) => state.products);

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    // Fetch products and categories only if they haven't been fetched yet
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
    if (categoryStatus === 'idle') {
      dispatch(fetchCategories());
    }
  }, [status, categoryStatus, dispatch]);

  const filteredProducts = products
    .filter((product) =>
      category === 'all' ? true : product.category === category
    )
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'price-low-high') return a.price - b.price;
      if (sortBy === 'price-high-low') return b.price - a.price;
      if (sortBy === 'rating') return b.rating.rate - b.rating.rate; // Assuming rating is an object { rate, count }
      return 0;
    });

  // Helper function to render the main content
  const renderContent = () => {
    if (status === 'loading') {
      return (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <ProductSkeleton key={idx} />
          ))}
        </Row>
      );
    }

    if (status === 'succeeded' && filteredProducts.length === 0) {
      return (
        <Alert variant="info" className="text-center">
          <Alert.Heading>No Products Found</Alert.Heading>
          <p>
            Sorry, we couldn't find any products matching your criteria. Try adjusting your search or filters.
          </p>
        </Alert>
      );
    }

    return (
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {filteredProducts.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 fw-bold page-title">
        Explore Our Products
      </h2>

      {/* Filter and Sort Controls Panel */}
      <Card className="p-3 mb-5 filter-panel shadow-sm">
        <Row className="g-3 align-items-center">
          <Col md={5} lg={6}>
            <InputGroup>
              <Form.Control
                placeholder="Search products by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="filter-input"
              />
            </InputGroup>
          </Col>
          <Col md={4} lg={3}>
            <Form.Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="filter-input"
            >
              {categoryStatus === 'loading' ? (
                <option>Loading categories...</option>
              ) : (
                ['all', ...categories].slice(0,4).map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))
              )}
            </Form.Select>
          </Col>
          <Col md={3} lg={3}>
            <Dropdown onSelect={(key) => setSortBy(key)} className="d-grid">
              <Dropdown.Toggle
                id="sort-dropdown"
                className="sort-dropdown-toggle"
              >
                Sort By: {sortBy.replace('-', ' ')}
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-100">
                <Dropdown.Item eventKey="default">Default</Dropdown.Item>
                <Dropdown.Item eventKey="price-low-high">
                  Price: Low to High
                </Dropdown.Item>
                <Dropdown.Item eventKey="price-high-low">
                  Price: High to Low
                </Dropdown.Item>
                <Dropdown.Item eventKey="rating">Best Rating</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Card>

      {/* Product Grid or Status Messages */}
      {renderContent()}
    </Container>
  );
};

export default ProductList;

