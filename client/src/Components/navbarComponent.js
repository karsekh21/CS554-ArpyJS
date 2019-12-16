import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


class NavbarComponent extends React.Component {
    render () {
            return(
            <div className="nav-custom">
                <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="#home">Arpy JS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Key and Scale</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Options</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Save Session</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Load Last Session</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Documentation</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
            )
        }
}

export default NavbarComponent;