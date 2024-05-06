import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import AddProduct from './AddProduct';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>&nbsp;&nbsp;&nbsp;
            <Link to="/products"> product list </Link>&nbsp;&nbsp;&nbsp;
             <Link to="/users">user list</Link>&nbsp;&nbsp;&nbsp;
             <Link to="/panier">panier</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <AddProduct/>
    </Navbar>

  );
}

export default Header;