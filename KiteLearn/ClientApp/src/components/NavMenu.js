import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (

        <header style={{ marginBottom: '90px' }} >
        
            <Navbar   className="fixed-top navbar navbar-light navbar-expand bg-white shadow  topbar static-top">
                <Container>
                    
                    <NavbarBrand style={{ color: 'var(--bs-pink)', fontWeight: 'bold', fontStyle: 'italic' }} tag={Link} to="/" ><i className="fas fa-signature" style={{ transform: 'scale(2)', borderColor: 'var(--bs-pink)', color: 'var(--bs-pink)' }} /> <strong style={{ margin: '6px'}}>KiteLearn</strong></NavbarBrand>
                    
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
             <NavItem>
             <NavLink  className="text-dark" > <div className="dropdown" style={{margin: '10px'}}><a className="dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" href="#" style={{color: 'var(--bs-pink)'}}><i className="fa fa-play-circle-o" style={{transform: 'scale(1.83)', color: 'var(--bs-pink)', margin: '6px'}} /></a>
                                    <div className="dropdown-menu"><Link className="dropdown-item" tag={Link} to="/catering">Catering Tutorial</Link><Link className="dropdown-item" tag={Link} to="/tech">Tech Tutorial</Link><Link className="dropdown-item" tag={Link} to="/food">Food Tutorial</Link><Link className="dropdown-item" tag={Link} to="/music">Music Videos</Link></div>
          </div></NavLink>
             </NavItem>
                <NavItem>
                <NavLink tag={Link} className="text-dark" to="/contact"><i className="fa fa-phone-square" style={{transform: 'scale(1.83)', color: 'var(--bs-pink)', margin: '10px'}} /></NavLink>
             </NavItem>
             <NavItem>
                <NavLink tag={Link} className="text-dark" to="/news"><i className="fa fa-envelope-o" style={{margin: '10px', color: 'var(--bs-pink)', transform: 'scale(1.83)'}} /></NavLink>
             </NavItem>
             

                <LoginMenu>
                </LoginMenu>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
