import React from 'react';
import { Nav, Container } from 'react-bootstrap'

const Navbar = () => { 
  return(
    <Nav className="navbar navbar-expand-lg fixed-top is-dark is-light-text">
      <Container className="navbar-brand h1 mb-0 text-large font-medium">
        DevOps Dashboard
      </Container>
      <Container className="navbar-nav ml-auto">
        {/* You can include a user section here if it comes to that later */}
      </Container>
    </Nav>
  );
}

export default Navbar; 