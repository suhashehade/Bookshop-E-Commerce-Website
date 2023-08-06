import React from "react";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Icon } from "@iconify/react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className='custom-nav'>
      <Navbar className='nav bg-light' variant='light' expand='lg'>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='m-auto'>
              <NavDropdown
                id='nav-dropdown-light-example'
                title='All Categories'
                menuVariant='light'
              >
                <NavDropdown.Item href='#action/3.1'>
                  <Link to='products'>Cooking</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>Science</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Novels</NavDropdown.Item>
                <NavDropdown.Divider />
                <p>oo</p>
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='#link'>Home</Nav.Link>

              <Nav.Link href='#link'>Most selling</Nav.Link>
              <NavDropdown
                id='nav-dropdown-light-example'
                title='Authors'
                menuVariant='light'
              >
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='#link'>New Releases</Nav.Link>
              <Nav.Link href='#link'>Quotes</Nav.Link>
              <Nav.Link href='#link'>Contact us</Nav.Link>
              <div className='links ms-5 d-flex justify-content-start'>
                <Nav.Link href='/cart' className="cart-icon">
                  <Badge className='cart-badge' pill bg='danger'>
                    {localStorage.cart !== undefined
                      ? JSON.parse(localStorage.cart).length
                      : 0}
                  </Badge>
                  <Icon icon='bi:cart' width='30' height='30' />
                </Nav.Link>
                <Nav.Link href='/cart' className='wishlist-icon'>
                  <Badge className='wishlist-badge' pill bg='danger'>
                    {localStorage.cart !== undefined
                      ? JSON.parse(localStorage.cart).length
                      : 0}
                  </Badge>
                  <Icon icon='mdi:heart-outline' width='30' height='30' />
                </Nav.Link>
              </div>
              <Nav.Link className='btn text-dark ms-5' href='#home'>
                <Icon icon='ph:sign-in' width='25' height='25' /> Sign in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
