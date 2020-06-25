import React, { Component } from 'react';
import { Navbar, NavLink, Nav } from 'react-bootstrap';
import './header.styles.scss';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="light" expand="sm" className="mb-12">
                    <Navbar.Brand href="/" className="mr-auto" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="40px" viewBox="40 0 80 80">
                            <path d="m 10 90 v -70 l 30 35 l 30 -35 v 70 h -10 v -45 l -20 
                                25 l -20 -25 v 45 z m 60 -70 l 30 70 l 30 -70 h -10 l -20 50 l -20 -50 z "
                            />
                        </svg>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavLink className="text-nowrap" href="/">Home</NavLink>
                            <NavLink className="text-nowrap" href="/experience">Worked For</NavLink>
                            <NavLink className="text-nowrap" href="/myskills">My Skills</NavLink>
                            <NavLink className="text-nowrap" href="/resume">Resume</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;