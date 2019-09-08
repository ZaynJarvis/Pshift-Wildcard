import React, { Component } from 'react';
import './style.css';
import { Navbar, Nav, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaWallet, FaProjectDiagram } from 'react-icons/fa';
import { IoMdPeople, IoIosBrowsers } from 'react-icons/io';

class BottomNavigation extends Component {
  render() {
    return (
      <Navbar
        fixed='bottom'
        bg='dark'
        variant='dark'
        className='centralize navbar'>
        <Nav className='mr-auto'>
          <LinkContainer to='/market'>
            <Nav.Link className='nav-link'>
              <IoIosBrowsers />
              <p>Market</p>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to='/projects'>
            <Nav.Link>
              <FaProjectDiagram />
              <p>Projects</p>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to='/insurance'>
            <Nav.Link>
              <IoMdPeople />
              <p>Insurance</p>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to='/wallet'>
            <Nav.Link>
              <FaWallet />
              <p>Wallet</p>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}

export default BottomNavigation;
