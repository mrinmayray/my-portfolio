import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/nav-icon5.svg';

export const Footer = () => {
  /*const handleCopyRightClick = () => {
    toast.info('All rights reserved. © 2023', {
      className: 'custom-toast', // Add a class to the toast
      toastStyle: { maxWidth: '1vw' }, // Limit the maximum width of the toast
    });
  };*/

  return (
    <footer className="footer">
    <br/><br/>
    <Container>
      <Row className="align-items-center">
        <Col size={12} sm={6}>
          <img src={logo} alt="Logo" />
        </Col>
        <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/mrinmayray/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
            <a href="https://www.facebook.com/mjmrinmay/" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
            <a href="https://www.instagram.com/mrinmay__/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
            <a href="https://twitter.com/mrinmay__/" target="_blank" rel="noopener noreferrer"><img src={navIcon5} alt="" /></a>
            <a href="https://www.youtube.com/@unlockedmoney/" target="_blank" rel="noopener noreferrer"><img src={navIcon4} alt="" /></a>
          </div>
          <p /*onClick={handleCopyRightClick} style={{ cursor: 'pointer' }}*/>Copyright 2023. All Rights Reserved</p>
        </Col>
      </Row>
    </Container>
  </footer>
);
};