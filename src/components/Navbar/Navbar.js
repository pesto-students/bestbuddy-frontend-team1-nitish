import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";

import Logo from "../shared/logo/Logo";
import "./Navbar.scss";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";
import { signOut } from "../../store/slice/users/userSlice";

const NavBar = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const username = useSelector((state) => state.user.userInfo.name);
  const dispatch = useDispatch();
  const token = localStorage.getItem("access-token");

  const logOut = () => {
    dispatch(signOut({ token }));
  };

  return (
    <Navbar key="lg" bg="white" expand="lg" className="mb-3 navbar">
      <Container className="container">
        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="offcanvasNavbarDropdown-expand-lg"
          className="burger"
        >
          <Hamburger />
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id="offcanvasNavbarDropdown-expand-lg"
          aria-labelledby="offcanvasNavbarDropdown-expand-lg"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarDropdown-expand-lg">
              <Logo />
            </Offcanvas.Title>
          </Offcanvas.Header>
          {isAuthenticated ? (
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">
                <Link to="/">Home</Link>
                <Link to="/addroom">Upload Room</Link>
                <Link to="/favorite">Favorite</Link>
                <NavDropdown
                  title="Profile"
                  id="offcanvasNavbarDropdown-expand-lg"
                  className="navdropdown"
                >
                  <h5 className="profile-name">
                    Hi {username}! {isAuthenticated}
                  </h5>
                  <NavDropdown.Item>
                    <Link to="/profile">My profile</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="/preference">My Preferences</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="/setting">Settings</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          ) : (
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 not-loggedIn">
                <Link to="/signup">SignUp</Link>
                <Link to="/signin">SignIn</Link>
              </Nav>
            </Offcanvas.Body>
          )}
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
