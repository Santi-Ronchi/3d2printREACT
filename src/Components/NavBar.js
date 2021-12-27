import React from 'react'
import CartWidget from './CartWidget';
import '../App.css';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estructura.scss'


const NavBar = () => {
    return (
      <div className="encabezado">
        <Navbar bg="light" expand="lg" className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Container fluid className="container">
            <Navbar.Brand as={ Link } to="/"><img src="/media/logo.png" alt="Logo de la pagina" height="60" width="60"/><h1 className="encabezado__logo">3D2Print</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="collapse navbar-collapse">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '200px' }}
                navbarScroll
              >
                <Nav.Link as={ Link } to="/">Home</Nav.Link>
                <NavDropdown title="Productos" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={ Link } to="/">Todo</NavDropdown.Item>
                  <NavDropdown.Item as={ Link } to="/category/C">Casa</NavDropdown.Item>
                  <NavDropdown.Item as={ Link } to="/category/G">Gaming</NavDropdown.Item>
                  <NavDropdown.Item as={ Link } to="/category/O">Otros</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={ Link } to="#action6">Sobre Nosotros</Nav.Link>
                <Nav.Link as={ Link } to="#action7">Servicios</Nav.Link>
                <Nav.Link as={ Link } to="#action8">Contacto</Nav.Link>
              </Nav>
              <Nav.Link href="https://instagram.com/3d2prints"><img src="/media/instalogo.png" alt="" height="30" width="30"/></Nav.Link>
                <Nav.Link href="https://facebook.com/3D2prints-108727260476174"><img src="/media/facelogo.png" alt="" height="30" width="30"/></Nav.Link>
                <Nav.Link href="https://twitter.com/3d2prints"><img src="/media/twitlogo.png" alt="" height="30" width="30"/></Nav.Link>
                <CartWidget/>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      
      
    )
}

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
export default NavBar;

