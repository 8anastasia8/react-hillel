import './Header.css';
import {Navbar, Container, Nav, Form, FormControl, Button} from "react-bootstrap";
import logo from './icon.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
    <>
        <Navbar className="Header-navbar" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        height="30"
                        width="30"
                        className="d-inline-block align-top"
                        alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="custom-nav" href="/">Home</Nav.Link>
                        <Nav.Link className="custom-nav" href="/about">About Us</Nav.Link>
                        <Nav.Link className="custom-nav" href="/contacts">Contacts</Nav.Link>
                        <Nav.Link className="custom-nav" href="/blog">Blog</Nav.Link>
                    </Nav>
                    <Form className="d-flex" >
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="me-2"
                        />
                        <Button variant="primary" className="custom-btn">
                            Search
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    )
}

export default Header;