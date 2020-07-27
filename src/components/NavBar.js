import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from './img/logo.svg';
import "./css/Style.css";

function NavBar() {
    const isMobile=()=> {
        if (window.innerWidth < 800) {
            window.location.href = "/usersection"
        }
    }
    return (
        <Navbar  expand="lg" className="backgroundcolor">
            <Navbar.Brand onClick={() => isMobile()}>

                <img
                    src={logo}
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="React logo"
                />
            </Navbar.Brand>

            <Navbar.Collapse>
                <Nav className="mr-auto justify-content-end navbar-items">
                    <NavDropdown title="EXPLORE " id="basic-nav-dropdown">
                        <NavDropdown.Item href="">New Courses</NavDropdown.Item>
                        <NavDropdown.Item href="">Saved Courses</NavDropdown.Item>
                        <NavDropdown.Item href="">Trending Courses</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="">Completed Courses</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#link">DEGREE</Nav.Link>
                    <Nav.Link href="#link">CERTIFICATES</Nav.Link>
                    <Nav.Link href="#link">SUPPORT</Nav.Link>
                    <button className="make-round"><i className="fa fa-search"/></button>
                    <button className="make-round"><i className="fa fa-bell"/></button>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
