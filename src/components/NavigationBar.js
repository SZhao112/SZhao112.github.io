import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo.png'; // 替换为你的logo路径
import userIcon from './user.png'; // 替换为你的用户头像路径

function NavigationBar() {
  return (
    <Navbar expand="lg" fixed="top" style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,113,1) 35%, rgba(0,212,255,1) 100%)', padding: '0 30px', zIndex: 1030, height: '100px' }}>
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
        <img
          src={logo}
          width="60"
          height="60"
          className="d-inline-block align-top rounded-circle"
          alt="Company logo"
        />
        <span style={{ fontFamily: 'Brush Script MT, cursive', fontSize: '36px', color: '#FFD700', marginLeft: '10px' }}>
          Color Experts
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end align-items-center">
        <Nav style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', marginTop: '0px' }}>
          <Nav.Link as={Link} to="/" style={{ color: 'white', marginRight: '40px' }}>HOME</Nav.Link>
          <Nav.Link as={Link} to="/explore-colors" style={{ color: 'white', marginRight: '40px' }}>Explore Colors</Nav.Link>
          <Nav.Link as={Link} to="/view-projects" style={{ color: 'white', marginRight: '40px' }}>View Projects</Nav.Link>
        </Nav>
        <Nav.Link as={Link} to="/register">
            <img
              src={userIcon}
              width="60"
              height="60"
              className="d-inline-block align-top rounded-circle"
              alt="User"
            />
          </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;







