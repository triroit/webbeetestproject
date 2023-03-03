import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Arrow90degLeft, Clock, List, Map } from 'react-bootstrap-icons';
import '../styles/App.css';

const MainNavbar = () => {
    return (
        <div>
            <Navbar className="px-3 mx-3" collapseOnSelect expand="lg">
                    <Navbar.Brand href="#"><Link to="/profile" className="links text-decoration-none links-color"><Arrow90degLeft /> <strong>User pages</strong> - Profile</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav-first" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav-first">
                        <Nav>
                            <Nav.Link href="#">Notes</Nav.Link>
                            <Nav.Link href="#">Friends</Nav.Link>
                            <Nav.Link href="#">Photos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="border-top border-bottom px-4">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#"><Link to="/profile" className="text-decoration-none links-color"><List /> Activity</Link></Nav.Link>
                            <Nav.Link href="#"><Link to="/map" className="text-decoration-none links-color"><Map /> Map</Link></Nav.Link>
                            <Nav.Link href="#"><Link to="/timer" className="text-decoration-none links-color"><Clock /> Timer</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#">Notes</Nav.Link>
                            <Nav.Link href="#">Friends</Nav.Link>
                            <Nav.Link href="#">Photos</Nav.Link>
                            <NavDropdown title='Settings' id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#">1</NavDropdown.Item>
                                <NavDropdown.Item href="#">2</NavDropdown.Item>
                                <NavDropdown.Item href="#">3</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">4</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default MainNavbar;
