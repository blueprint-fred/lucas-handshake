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
                <MDBNavItem className="px-4">
                    <MDBNavLink to="#!">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="px-4">
                    <MDBNavLink to="#!">About</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="px-4">
                    <MDBNavLink to="#!">Contact</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                <MDBDropdown className="px-4">
                    <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">Apps</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="#!">Dojo</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Zen Garden</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Devasuki</MDBDropdownItem>
                    <MDBDropdownItem href="#!">AIT</MDBDropdownItem>
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
