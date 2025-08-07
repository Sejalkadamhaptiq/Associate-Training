// // import React from 'react';
// // import { Card, Button, Badge } from 'react-bootstrap';
// // import { Link } from 'react-router-dom';
// // import { useDispatch } from 'react-redux';
// // import { addToCart } from "../redux/cardSlice";
// // import { addToWishlist } from "../redux/wishlistSlice";

// // const ProductCard = ({ product }) => {
// //   const dispatch = useDispatch();

// //   if (!product) return null;

// //   const handleAddToCart = () => {
// //     dispatch(addToCart(product));
// //   };

// //   const handleAddToWishlist = () => {
// //     dispatch(addToWishlist(product));
// //   };

// //   // Determine stock status
// //   const inStock = product.stock > 0;

// //   return (
// //     <Card className="h-100 shadow-sm">
// //       {product.thumbnail && (
// //         <Link to={`/product/${product.id}`}>
// //           <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
// //         </Link>
// //       )}
// //       <Card.Body className="d-flex flex-column gap-1">
// //         <Card.Title>{product.title}</Card.Title>

// //         {/* Price */}
// //         <Card.Text className="mb-1 text-muted fw-semibold">
// //           ${product.price}
// //         </Card.Text>

// //         {/* Rating */}
// //         <Card.Text className="mb-1">
// //           ⭐ {product.rating || 'No rating'}
// //         </Card.Text>

// //         {/* Stock Status */}
// //         <Card.Text className="mb-2">
// //           <Badge bg={inStock ? 'warning' : 'danger'} text="dark">
// //             {inStock ? 'In Stock' : 'Out of Stock'}
// //           </Badge>
// //         </Card.Text>

// //         {/* Buttons */}
// //       <div className="d-flex flex-md-column flex-column flex-sm-column flex-lg-row gap-2 mt-auto">
// //   <Button
// //     onClick={handleAddToCart}
// //     className="flex-fill p-2"
// //     disabled={!inStock}
// //     style={{
// //       backgroundColor: 'rgb(248, 193, 193)',
// //       border: 'none',
// //       color: '#fff'
// //     }}
// //   >
// //     Add to Cart
// //   </Button>
// //   <Button
// //     onClick={handleAddToWishlist}
// //     className="flex-fill p-2"
// //     style={{
// //       backgroundColor: 'rgb(231, 145, 138)',
// //       border: 'none',
// //       color: '#fff'
// //     }}
// //   >
// //     Add to Wishlist
// //   </Button>
// // </div>

// //       </Card.Body>
// //     </Card>
// //   );
// // };

// // export default ProductCard;
// import React, { useState } from 'react';
// import { Card, Button, Badge, Toast, ToastContainer } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addToCart } from "../redux/cardSlice";
// import { addToWishlist } from "../redux/wishlistSlice";

// const ProductCard = ({ product }) => {
//   const dispatch = useDispatch();
//   const [showToast, setShowToast] = useState(false); // For toast visibility

//   if (!product) return null;

//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//     setShowToast(true); // Show toast on add
//   };

//   const handleAddToWishlist = () => {
//     dispatch(addToWishlist(product));
//   };

//   const inStock = product.stock > 0;

//   return (
//     <>
//       <Card className="h-100 shadow-sm position-relative">
//         {product.thumbnail && (
//           <Link to={`/product/${product.id}`}>
//             <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
//           </Link>
//         )}
//         <Card.Body className="d-flex flex-column gap-1">
//           <Card.Title>{product.title}</Card.Title>

//           <Card.Text className="mb-1 text-muted fw-semibold">
//             ${product.price}
//           </Card.Text>

//           <Card.Text className="mb-1">
//             ⭐ {product.rating || 'No rating'}
//           </Card.Text>

//           <Card.Text className="mb-2">
//             <Badge bg={inStock ? 'warning' : 'danger'} text="dark">
//               {inStock ? 'In Stock' : 'Out of Stock'}
//             </Badge>
//           </Card.Text>

//           <div className="d-flex flex-md-column flex-column flex-sm-column flex-lg-row gap-2 mt-auto">
//             <Button
//               onClick={handleAddToCart}
//               className="flex-fill p-2"
//               disabled={!inStock}
//               style={{
//                 backgroundColor: 'rgb(248, 193, 193)',
//                 border: 'none',
//                 color: '#fff'
//               }}
//             >
//               Add to Cart
//             </Button>
//             <Button
//               onClick={handleAddToWishlist}
//               className="flex-fill p-2"
//               style={{
//                 backgroundColor: 'rgb(231, 145, 138)',
//                 border: 'none',
//                 color: '#fff'
//               }}
//             >
//               Add to Wishlist
//             </Button>
//           </div>
//         </Card.Body>
//       </Card>

//       {/* Toast message */}
//       <ToastContainer
//         position="top-end"
//         className="p-3"
//         style={{ zIndex: 9999, position: "fixed" }}
//       >
//         <Toast
//           bg="success"
//           onClose={() => setShowToast(false)}
//           show={showToast}
//           delay={2000}
//           autohide
//         >
//           <Toast.Header>
//             <strong className="me-auto">Cart</strong>
//           </Toast.Header>
//           <Toast.Body className="text-white">{product.title} added to cart!</Toast.Body>
//         </Toast>
//       </ToastContainer>
//     </>
//   );
// };

// export default ProductCard;

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
