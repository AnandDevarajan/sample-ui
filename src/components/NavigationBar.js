import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
// import Image from 'react-bootstrap/Image';

const img = require('./logo.png');
const divStyle1 = {
  width:"327px",
  height:"69px",
  backgroundImage: `url(${img})`
};

const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #FFFFFF;
    font-family:Sans-Serif;
    &:hover { color: grey; }
  } 
.navbar-image {
background-image: url(./logo.png);
background-repeat: no-repeat;
width: 10px;
height: 20px;
  }
  .navbar-brand {
    font-size: 1.5em; 
    color: #9FFFCB;
    &:hover { color: green; };
  }
  .form-center {
    position: absolute;
    left: 25%;
    right: 25%;
  }

  .navbar-style {
    width: 100%;
    font-size:18px;
    font-family:helevita;
    margin-right:10px;
    text-align: right;
    flex-Direction: row;
    color:grey;
    background-attachment: fixed;
  }
  
  .navbar-mainstyle {
    font-size:20px;
    font-family:sans-serif;
    color: rgb(255, 255, 255);
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="/">
      <div style={divStyle1}>
      </div>
        <div >
      <h3>Food Ordering System </h3>
        </div>
        
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-mainstyle">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/products">Products</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/hotels">Partner Hotels</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/contact">Contact Us</Nav.Link></Nav.Item>
          </Nav>
          <Nav class="navbar-style">
            <Nav.Item><Nav.Link href="/signin">SignIn</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/signup">SignUp</Nav.Link></Nav.Item>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)