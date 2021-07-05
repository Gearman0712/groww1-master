import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const NavigationBar = () => (
    <Navbar collapseOnSelect expand="lg"  variant="dark" style ={{backgroundColor :'#00d09c'}}>
        <Navbar.Brand href="#"><i className="fa fa-bank"></i> GROWW</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              
            </Nav>
        </Navbar.Collapse>
        <Nav>
            <Nav.Link href="/all-banks"><i className="fa fa-user-circle" aria-hidden="true"></i>Back</Nav.Link>
    
        </Nav>
    </Navbar>
)
