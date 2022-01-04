import React from "react";
import "./asideTop.scss";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,Container } from 'react-bootstrap';
import {HamburgerButton} from "../../../../gatsby-theme-minimal";
const showSettings=(event)=> {
  event.preventDefault();
}

 const AsideTop=()=>{

    return(
        <aside className="mainAside">
            <div id="menus">
         { window.innerWidth < 992 ?  
           
        <>
          <HamburgerButton/>
        </>
            
           
            
           
             :
<>
  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">My work</Nav.Link>
      <Nav.Link href="#pricing">About me</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
        }
            </div>

        </aside>
    )
}
export default AsideTop;