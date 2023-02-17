import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Logo from '../shared/logo/Logo';
import './Navbar.scss';

const NavBar = () => {
  return (
    <Navbar key='lg' bg="white" expand='lg' className="mb-3 navbar">
      <Container>
        <Navbar.Brand href="#"><Logo /></Navbar.Brand>
        <Navbar.Toggle aria-controls='offcanvasNavbarDropdown-expand-lg' />
        <Navbar.Offcanvas
          id='offcanvasNavbarDropdown-expand-lg'
          aria-labelledby='offcanvasNavbarDropdown-expand-lg'
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id='offcanvasNavbarDropdown-expand-lg'>
              <Logo />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Upload Room</Nav.Link>
              <Nav.Link>Favorite</Nav.Link>
              <NavDropdown
                title="Profile"
                id='offcanvasNavbarDropdown-expand-lg'
              >
                <h5 className='profile-name'>Hi Mohamed!</h5>
                <NavDropdown.Item>My profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>My Preference</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;