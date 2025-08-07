import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Cart from './features/cart/Cart';
import ProductList from './features/product/ProductList';
import ProductDetails from './features/product/ProductDetails';
import Wishlist from './features/wishlist/Wishlist';
import Payment from './pages/Payment';
import PrivateRoute from './component/PrivateRoute';
import Login from './features/auth/Login';
import Signup from './features/auth/Signup';
import Logout from './features/auth/Logout';
import PaymentOptions from './pages/PaymentOptions';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/product',
        element: <ProductList/>,
        
      },
     {
        path: '/cart',
        element: <Cart/>,
      },
       {
        path: '/product/:id',
        element: <ProductDetails/>,
      },
        {
        path: '/wishlist',
        element: <Wishlist/>,
      },
      {
        path: '/login',
        element:<Login/>
      },
       {
        path: '/option',
        element:<PaymentOptions/>
      },
      {
        path: '/signup',
        element:<Signup/>
      },
       {
        path: '/contact',
        element:<ContactUs/>
      },
       {
        path: '/about',
        element:<AboutUs/>
      },
        {
        path: '/logout',
        element:<Logout/>
      },
      {
    path: "/payment",
    element: (
      <PrivateRoute>
        <Payment />
      </PrivateRoute>
    ),
  },
    ],
  },
]);
function App() {
  return (
    <div className="App">
     
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
