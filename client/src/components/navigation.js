import React, { Component } from 'react';

//Components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';

// styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

class Navigation extends Component {
    render() {
        return(
            <Navbar className="navbar">
                <Container>
                    <Navbar.Brand href="#home"> Instagram </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link  href="/login"> Sign In </Nav.Link>
                        <Nav.Link  href="/register"> Register </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }

}

export default Navigation;