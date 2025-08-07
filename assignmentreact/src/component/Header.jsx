import React from 'react';
import Navbar from '../pages/Navbar';
import { Container } from 'react-bootstrap';
import logo from '../assets/home.png';
const Header = () => {
  return (
    <header style={{ backgroundColor: '#071952'}} >
      <Container className="d-flex justify-content-between align-items-center py-3 ">
        <Navbar />
      <h3 style={{color:'#ffff'}}>Sejal Kadam</h3>
      </Container>
    </header>
  );
};

export default Header;
