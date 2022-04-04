import React from "react"
import {Navbar, Container, Nav} from 'react-bootstrap'


const Header = () =>{
    return (
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="/">Images Gallery</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;