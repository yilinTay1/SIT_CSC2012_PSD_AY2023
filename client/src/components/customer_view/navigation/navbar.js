import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NextLink from "next/link";

function CustNavbar() {
  // HTML Frontend
  return (
    <Navbar bg="black" variant="dark">
      <Container>
        {/* Brand Icon */}
        <Navbar.Brand>
          <NextLink href="/customer/home" passHref>
            <img src="/static/Logo.png" alt="logo" width="180" height="180" />
          </NextLink>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            href="#home"
            style={{
              color: "white",
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#features"
            style={{
              color: "white",
            }}
          >
            Features
          </Nav.Link>
          <Nav.Link
            href="#pricing"
            style={{
              color: "white",
            }}
          >
            Pricing
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustNavbar;
