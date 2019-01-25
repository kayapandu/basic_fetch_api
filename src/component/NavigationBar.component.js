import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';

import {LinkContainer} from 'react-router-bootstrap';


class NavigationBar extends React.Component {
    render(){
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#brand">Dash One</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                    <LinkContainer to="/">
                        <NavItem>
                            Home
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <NavItem>
                            About
                        </NavItem>
                    </LinkContainer>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavigationBar;