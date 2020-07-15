import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from '../logo.svg';
import "./navstyle.css";

function NavBar() {
    return (
        <Navbar  expand="lg" className="backgroundcolor">
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="React logo"
                />
            </Navbar.Brand>

            <Navbar.Collapse>
                <Nav className="mr-auto justify-content-end navbar-items" style={{ width: "100%" }}>
                    <NavDropdown title="EXPLORE " id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">New Courses</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Saved Courses</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Trending Courses</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Completed Courses</NavDropdown.Item>
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
