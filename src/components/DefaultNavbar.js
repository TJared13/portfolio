import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
// import Icon from '@material-tailwind/react/Icon';

export default function DefaultNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar color="black" navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <a
                        href="/"
                        rel="noreferrer"
                    >
                        <NavbarBrand>Dallin Jared</NavbarBrand>
                    </a>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        color="white"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <div className="flex flex-wrap z-50 flex-row items-center content-between bg-blue-gray">
                            <NavLink
                                href="/experience"
                                rel="noreferrer"
                                ripple="light"
                                className="hover:border-grey-700"
                            >
                                Experience
                            </NavLink>
                            <NavLink
                                href="#"
                                rel="noreferrer"
                                ripple="light"
                            >
                                Education
                            </NavLink>
                            <Dropdown
                                color="transparent"
                                size="sm"
                                buttonType="link"
                                buttonText={
                                    <div className="text-md flex items-center">
                                        <span className="text-sm font-light leading text-white">
                                            Projects
                                        </span>
                                    </div>
                                }
                                ripple="light"
                            >
                                <Link to="/">
                                    <DropdownItem color="blueGray">
                                        Javascript
                                    </DropdownItem>
                                </Link>
                                <Link to="/">
                                    <DropdownItem color="blueGray">
                                        Asp.Net
                                    </DropdownItem>
                                </Link>
                                <Link to="/">
                                    <DropdownItem color="blueGray">
                                        Python
                                    </DropdownItem>
                                </Link>
                                <Link to="/">
                                    <DropdownItem color="blueGray">
                                        Business Administration
                                    </DropdownItem>
                                </Link>
                            </Dropdown>
                            <NavLink
                                href="/profile"
                                rel="noreferrer"
                                ripple="light"
                                className="hover:border-grey-700"
                            >
                                {/* <Icon family="font-awesome" name="fa fa-user-circle" size="2xl" /> */}
                                &nbsp; Profile
                            </NavLink>
                        </div>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}
