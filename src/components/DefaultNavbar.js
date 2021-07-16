import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
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
import Button from '@material-tailwind/react/Button';

export default function DefaultNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);
    const [showModal, setShowModal] = React.useState(false);

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
                        <div className="flex flex-grow z-50 flex-row items-center content-between">
                            <NavLink
                                href="/resume"
                                rel="noreferrer"
                                ripple="light"
                                className="hover:border-grey-700"
                            >
                                Resume
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
                                onClick={(e) => setShowModal(true)}
                                rel="noreferrer"
                                ripple="light"
                            >
                                {/* <Icon
                                    family="font-awesome"
                                    name="fab fa-github"
                                    size="xl"
                                /> */}
                                &nbsp;Github
                            </NavLink>
                            <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
                                <ModalHeader toggler={() => setShowModal(false)}>
                                    GitHub Link
                                </ModalHeader>
                                <ModalBody>
                                    <p className="text-base leading-relaxed text-gray-600 font-normal">
                                        Just double checking you want to leave the site and go to my stellar GitHub Page!
                                    </p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button 
                                        color="red"
                                        buttonType="link"
                                        onClick={(e) => setShowModal(false)}
                                        ripple="dark"
                                    >
                                        Close
                                    </Button>

                                    <Button
                                        color="green"
                                        href="https://www.github.com"
                                        ripple="light"
                                    >
                                        Let's Do This!
                                    </Button>
                                </ModalFooter>
                            </Modal>
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
