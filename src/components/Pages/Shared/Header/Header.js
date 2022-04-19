import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../../firebase.init";
import logo from "../../../../Logo.png";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Shop
            </Nav.Link>
            <NavDropdown title="Catagory">
              <NavDropdown.Item as={Link} to="/watch">
                Watch
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/phone">
                Phone
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tv">
                Tv
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/orders">
              Orders
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs">
              Blogs
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            {user ? (
              <Button onClick={handleLogOut}>Logout</Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            <Nav.Link as={Link} to="/cart">
              cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
