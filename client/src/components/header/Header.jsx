import React from 'react';
import { Container, Navbar, Offcanvas, Nav, Form, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import classes from './Header.module.css';

const Header = () => {
    const { pathname } = useLocation();

    return (
        <Navbar bg="light" expand='xl' className="mb-3">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className='fw-bold'>Daily news</Navbar.Brand>
                <Navbar.Toggle className="shadow-none border-0" aria-controls={`offcanvasNavbar-expand-xl`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-xl`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className='fw-bold' id={`offcanvasNavbarLabel-expand-xl`}>
                            Daily News
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3 fw-bold">
                            <Nav.Link className={pathname === '/' ? 'active border-bottom border-3 border-dark' : ''} as={Link} to="/">General</Nav.Link>
                            <Nav.Link className={pathname === '/business' ? 'active border-bottom border-3 border-dark' : ''} as={Link} to="/business">Business</Nav.Link>
                            <Nav.Link className={pathname === '/entertainment' ? 'active border-bottom border-3 border-dark' : ''} as={Link} to="/entertainment">Entertainment</Nav.Link>
                            <Nav.Link className={pathname === '/health' ? 'active border-bottom border-3 border-dark' : ''} as={Link} to="/health">Health</Nav.Link>
                            <Nav.Link className={pathname === '/science' ? 'active border-bottom border-3 border-dark' : ''} as={Link} to="/science">Science</Nav.Link>
                            <Nav.Link className={pathname === '/sports' ? 'active border-bottom border-3 border-dark' : ''} as={Link} to="/sports">Sports</Nav.Link>
                            <Nav.Link className={pathname === '/technology' ? 'active border-bottom border-3 border-dark' : ''} as={Link} to="/technology">Technology</Nav.Link>
                        </Nav>
                        <Form className={`d-flex align-items-center border rounded-0 border-dark theme-shadow-min bg-white ${classes.media}`}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 shadow-none border-0 rounded-3 bg-none"
                                aria-label="Search"
                                size="sm"
                            />
                            <Button size="sm" type="submit" variant='none' className='border-0 shadow-none'> <FiSearch className="fs-4" /> </Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default Header