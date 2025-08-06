// src/pages/Logout.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logout());
    navigate('/login'); // or home
  }, [dispatch, navigate]);

  return <p>Logging out...</p>;
};

export default Logout;
