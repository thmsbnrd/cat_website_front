import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "../style/NavbarSite.css";

function NavbarSite() {
  return (
    <div className="NavbarSite">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          Another cat website
          <span role="img" aria-label="cat">
            ✨
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/add">Add cat</Nav.Link>
            <NavDropdown title="Breed" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                American Shorthair
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Siamese</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Abyssinian</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Feeling lucky
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              disabled
            />
            <Button variant="outline-success" disabled>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarSite;
