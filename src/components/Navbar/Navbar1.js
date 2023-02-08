import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./Logo";
import "./Navbar1.css";


const Navbar1 = () => {
  return (
    <div>
          <Navbar bg="light" variant="light">
          <div>
          <Logo />
        </div>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="active">
              Home
            </Nav.Link>
            <Nav.Link>Upload Room</Nav.Link>
            <Nav.Link>Add Favourite</Nav.Link>
            <Nav.Link>Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
