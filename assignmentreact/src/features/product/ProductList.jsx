// // import React, { useEffect, useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { fetchProducts, fetchCategories } from '../redux/productSlice';
// // import { Container, Row, Col, Button, Form } from 'react-bootstrap';
// // import ProductCard from './ProductCard';

// // import beautyImg from '../assets/beauty.png';
// // import furnitureImg from '../assets/furniture .png'; // ensure correct filename
// // import groceriesImg from '../assets/food.png';
// // import perfumeImg from '../assets/data.png'; // placeholder if needed

// // import '../App.css';

// // const ProductList = () => {

//   // const dispatch = useDispatch();
//   // const { items: products, status, error, categories } = useSelector(state => state.products);

//   // const [selectedCategory, setSelectedCategory] = useState('all');
//   // const [sortOption, setSortOption] = useState('none');
//   // const [priceRange, setPriceRange] = useState([0, 1000]);
//   // const [searchTerm, setSearchTerm] = useState('');
//   // const [inStockOnly, setInStockOnly] = useState(false);


//   // useEffect(() => {
//   //   if (status === 'idle') {
//   //     dispatch(fetchProducts());
//   //   }
//   //   dispatch(fetchCategories());
//   // }, [dispatch, status]);

//   // if (status === 'loading') return <p className="text-center">Loading...</p>;
//   // if (status === 'failed') return <p className="text-danger text-center">Error: {error}</p>;

//   // // Filter + Search
//   // let filteredProducts = products
//   //   .filter(product =>
//   //     (selectedCategory === 'all' || product.category === selectedCategory) &&
//   //     product.price >= priceRange[0] &&
//   //     product.price <= priceRange[1] &&
//   //     product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//   //     (!inStockOnly || product.stock > 0)
//   //   );


//   // // Sorting
//   // switch (sortOption) {
//   //   case 'price-low':
//   //     filteredProducts.sort((a, b) => a.price - b.price);
//   //     break;
//   //   case 'price-high':
//   //     filteredProducts.sort((a, b) => b.price - a.price);
//   //     break;
//   //   case 'rating-high':
//   //     filteredProducts.sort((a, b) => b.rating - a.rating);
//   //     break;
//   //   case 'title-asc':
//   //     filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
//   //     break;
//   //   default:
//   //     break;
//   // }

//   // const categoryImages = {
//   //   beauty: beautyImg,
//   //   fragrances: perfumeImg,
//   //   furniture: furnitureImg,
//   //   groceries: groceriesImg,
//   // };

// //   return (
// //     <Container className="py-2 ">
// //       <Row className='gy-4 gx-md-5 py-4'>
// //         {/* Sidebar Filters */}
// //         <Col xs={12} md={3}>

// //           <div className="d-flex flex-md-column gap-1 ">
// //             {categories.slice(0, 4).map((cat) => {
// //               const category = (cat.slug || cat).toLowerCase();

// //               return (
// //                 <Button
// //                   key={category}
// //                   variant={selectedCategory === category ? 'dark' : 'outline-dark'}
// //                   onClick={() => setSelectedCategory(category)}
// //                   className="d-flex align-items-center gap-1"
// //                 >
// //                   <img
// //                     src={categoryImages[category] || ''}
// //                     alt={category}
// //                     style={{ width: 35, height: 35, objectFit: 'contain' }}
// //                   />
// //                   <span className="text-capitalize">{cat.name || cat}</span>
// //                 </Button>
// //               );
// //             })}
// //           </div>

// //           <hr />
// //           <Row className="d-flex flex-md-column flex-lg-column mb-4">
// //             {/* Sort By Dropdown */}
// //             <Col xs={6} md={12}>
// //               <Form.Select
// //                 value={sortOption}
// //                 onChange={(e) => setSortOption(e.target.value)}
// //                 className="w-100 mb-4"
// //               >
// //                 <option value="none">Sort</option>
// //                 <option value="price-low">Low to High</option>
// //                 <option value="price-high">High to Low</option>
// //                 <option value="rating-high">Top Rated</option>
// //                 <option value="title-asc">A to Z</option>
// //               </Form.Select>
// //             </Col>

// //             {/* Search Bar */}
// //             <Col xs={6} md={12}>
// //               <Form.Control
// //                 type="text"
// //                 placeholder="Search products..."
// //                 value={searchTerm}
// //                 onChange={(e) => setSearchTerm(e.target.value)}
// //               />
// //               <Form.Check
// //                 type="checkbox"
// //                 label="In Stock Only"
// //                 checked={inStockOnly}
// //                 onChange={(e) => setInStockOnly(e.target.checked)}
// //                 className="mt-3"
// //                 id="stock-only"
// //               />

// //             </Col>


// //           </Row>

// //         </Col>

// //         {/* Product Grid */}
// //         {/* Product Grid */}
// //         <Col xs={12} md={9}>


// //           <Row xs={2} md={2} lg={3} className="g-4">
// //             {filteredProducts.length > 0 ? (
// //               filteredProducts.map(product => (
// //                 <Col key={product.id}>
// //                   <ProductCard product={product} />
// //                 </Col>
// //               ))
// //             ) : (
// //               <Col>
// //                 <p className="text-center text-muted">No products found.</p>
// //               </Col>
// //             )}
// //           </Row>
// //         </Col>

// //       </Row>
// //     </Container>
// //   );
// // };

// // export default ProductList;
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts, fetchCategories } from '../redux/productSlice';
// import { Container, Row, Col, Button, Form } from 'react-bootstrap';
// import ProductCard from './ProductCard';

// import beautyImg from '../assets/beauty.png';
// import furnitureImg from '../assets/furniture .png'; // ensure correct filename
// import groceriesImg from '../assets/food.png';
// import perfumeImg from '../assets/data.png'; // placeholder if needed

// // ...existing imports
// import '../App.css';

// const ProductList = () => {
//   const [minDiscount, setMinDiscount] = useState(0);

//   const dispatch = useDispatch();
//   const { items: products, status, error, categories } = useSelector(state => state.products);

//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [sortOption, setSortOption] = useState('none');
//   const [priceRange, setPriceRange] = useState([0, 1000]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [inStockOnly, setInStockOnly] = useState(false);


//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchProducts());
//     }
//     dispatch(fetchCategories());
//   }, [dispatch, status]);

//   if (status === 'loading') return <p className="text-center">Loading...</p>;
//   if (status === 'failed') return <p className="text-danger text-center">Error: {error}</p>;

//   // Filter + Search
//  let filteredProducts = products
//   .filter(product =>
//     (selectedCategory === 'all' || product.category === selectedCategory) &&
//     product.price >= priceRange[0] &&
//     product.price <= priceRange[1] &&
//     product.discountPercentage >= minDiscount && // new filter
//     product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//     (!inStockOnly || product.stock > 0)
//   );


//   // Sorting
//   switch (sortOption) {
//     case 'price-low':
//       filteredProducts.sort((a, b) => a.price - b.price);
//       break;
//     case 'price-high':
//       filteredProducts.sort((a, b) => b.price - a.price);
//       break;
//     case 'rating-high':
//       filteredProducts.sort((a, b) => b.rating - a.rating);
//       break;
//     case 'title-asc':
//       filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
//       break;
//     default:
//       break;
//   }

//   const categoryImages = {
//     beauty: beautyImg,
//     fragrances: perfumeImg,
//     furniture: furnitureImg,
//     groceries: groceriesImg,
//   };


//   return (
//     <Container className="py-4">
//       <Row className='gy-4 gx-md-5'>
//         {/* Sidebar Filters */}
//         <Col xs={12} md={3}>
//           <div
//             className="d-flex flex-md-column gap-2 p-3"
//             style={{
//               backgroundColor: '#FFF0EB',
//               borderRadius: '10px',
//               boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
//             }}
//           >
//             {categories.slice(0, 4).map((cat) => {
//               const category = (cat.slug || cat).toLowerCase();

//               return (
//                 <Button
//                   key={category}
//                   onClick={() => setSelectedCategory(category)}
//                   className="d-flex align-items-center gap-2 text-capitalize w-100"
//                   style={{
//                     backgroundColor: selectedCategory === category ? '#F8C1C1' : '#FFF',
//                     color: selectedCategory === category ? '#fff' : '#B17E4E',
//                     border: '1px solid #F8C1C1',
//                     boxShadow: '0 2px 2px rgba(0, 0, 0, 0.05)',
//                     transition: 'all 0.3s ease',
//                   }}
//                   onMouseOver={(e) => {
//                     if (selectedCategory !== category) {
//                       e.currentTarget.style.backgroundColor = '#F8C1C1';
//                       e.currentTarget.style.color = '#fff';
//                     }
//                   }}
//                   onMouseOut={(e) => {
//                     if (selectedCategory !== category) {
//                       e.currentTarget.style.backgroundColor = '#FFF';
//                       e.currentTarget.style.color = '#B17E4E';
//                     }
//                   }}
//                 >
//                   <img
//                     src={categoryImages[category] || ''}
//                     alt={category}
//                     style={{ width: 35, height: 35, objectFit: 'contain' }}
//                   />
//                   {cat.name || cat}
//                 </Button>
//               );
//             })}
//           </div>

//           <hr />

//           <div
//             className="p-3"
//             style={{
//               backgroundColor: '#FFF0EB',
//               borderRadius: '10px',
//               boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
//             }}
//           >
//             <Form.Select
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)}
//               className="mb-3"
//               style={{
//                 backgroundColor: '#FFF',
//                 border: '1px solid #F8C1C1',
//                 color: '#B17E4E',
//               }}
//             >
//               <option value="none">Sort</option>
//               <option value="price-low">Low to High</option>
//               <option value="price-high">High to Low</option>
//               <option value="rating-high">Top Rated</option>
//               <option value="title-asc">A to Z</option>
//             </Form.Select>

//             <Form.Control
//               type="text"
//               placeholder="Search products..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               style={{
//                 marginBottom: '1rem',
//                 border: '1px solid #F8C1C1',
//                 backgroundColor: '#FFF',
//               }}
//             />

//             <Form.Check
//               type="checkbox"
//               label="In Stock Only"
//               checked={inStockOnly}
//               onChange={(e) => setInStockOnly(e.target.checked)}
//               id="stock-only"
//               style={{
//                 color: '#B17E4E',
//               }}
//             />
//           </div>
//           <Form.Label className="mt-3" style={{ color: '#B17E4E' }}>
//   Min Discount: {minDiscount}%
// </Form.Label>
// <Form.Range
//   min={0}
//   max={90}
//   step={6}
//   value={minDiscount}
//   onChange={(e) => setMinDiscount(Number(e.target.value))}
//   style={{ accentColor: '#F8C1C1' }}
// />

//         </Col>

//         {/* Product Grid */}
//         <Col xs={12} md={9}>
//           <Row xs={2} md={2} lg={3} className="g-4">
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map(product => (
//                 <Col key={product.id}>
//                   <div style={{
//                     backgroundColor: '#FFF',
//                     borderRadius: '10px',
//                     boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
//                     padding: '10px',
//                     height: '100%',
//                   }}>
//                     <ProductCard product={product} />
//                   </div>
//                 </Col>
//               ))
//             ) : (
//               <Col>
//                 <p className="text-center text-muted">No products found.</p>
//               </Col>
//             )}
//           </Row>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ProductList;
// src/components/ProductList.jsx

// src/component/ProductList.jsx

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
    <Card className="h-100" >
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
        
            <Dropdown onSelect={(key) => setSortBy(key)} className="d-grid sort-dropdown-wrapper " >
              <Dropdown.Toggle
                id="sort-dropdown"
                className="sort-dropdown-toggle" 
              >
                Sort By: {sortBy.replace('-', ' ')}
              </Dropdown.Toggle>
             <Dropdown.Menu className="w-100" style={{  position: 'fixed' }}>

                <Dropdown.Item eventKey="default" >Default</Dropdown.Item>
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

