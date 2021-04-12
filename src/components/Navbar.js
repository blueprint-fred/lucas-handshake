import React, {useState} from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

    const NavigationBar = () => {
    const [collapse, setCollapse] = useState(false);
    return (
        <>
        <MDBNavbar color="light-color" className="p-4" light expand="md">
            <MDBNavbarBrand>
            <strong className="black-text font-weight-bold">Handshake</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={()=>setCollapse(!collapse)} />
            <MDBCollapse id="navbarCollapse3" isOpen={collapse} navbar>
            <MDBNavbarNav right>
                <MDBNavItem className="px-lg-4 px-md-4 px-0">
                    <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="px-lg-4 px-md-4 px-0">
                    <MDBNavLink to="/about">About</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="px-lg-4 px-md-4 px-0">
                    <MDBNavLink to="/contact">Contact</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                <MDBDropdown className="px-lg-4 px-md-4 px-0">
                    <MDBDropdownToggle nav caret>
                    <div className="d-lg-inline d-inline d-md-inline">Apps</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="#dojolinkhere">Dojo</MDBDropdownItem>
                    <MDBDropdownItem href="#zenlinkhere">Zen Garden</MDBDropdownItem>
                    <MDBDropdownItem href="#devasukilinkhere">Devasuki</MDBDropdownItem>
                    <MDBDropdownItem href="#aitlinkhere">AIT</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
                </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
                <MDBNavItem>
                    <MDBNavLink className="waves-effect waves-light" to="#!">
                        <MDBIcon fab icon="facebook-f" />
                    </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink className="waves-effect waves-light" to="#!">
                        <MDBIcon fab icon="twitter" />
                    </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                    <MDBIcon fab icon="google-plus-g" />
                </MDBNavLink>
                </MDBNavItem>
            </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
        </>
    )
}

export default NavigationBar
