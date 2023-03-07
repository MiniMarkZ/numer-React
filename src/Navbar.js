import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="home">NUMERICAL METHODS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Roots of equation" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Bisection">Bisection</NavDropdown.Item>
            <NavDropdown.Item href="/FalsePosition">False Position</NavDropdown.Item>
            <NavDropdown.Item href="/Onepoint">One Point</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Matrix" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Matrix_test">test</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="tmp" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>

              <Nav.Link href="#link">Link</Nav.Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;