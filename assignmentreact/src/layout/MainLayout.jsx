// MainLayout.js
import { Outlet } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      
      {/* This grows to fill available vertical space */}
      <main className="flex-grow-1">
        <Outlet />
      </main>

      {/* Footer sticks to the bottom when content is short */}
      <Footer />
        <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}
   
export default MainLayout;
