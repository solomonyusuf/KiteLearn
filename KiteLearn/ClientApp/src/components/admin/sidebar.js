import React, { useState } from 'react';
import axios from 'axios';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


export default function Sidebar(){



    return (
        <nav style={{ boxShadow: '0px', position: 'fixedTop', marginRight:'10px' }} className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 fixed-top" style={{ background: 'var(--bs-pink)', marginTop: '0px', filter: 'blur(0px)', boxShadow: '3px 0px 6px' }}>
        <div className="container-fluid d-flex flex-column p-0"><a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#"><i className="fas fa-signature" style={{transform: 'scale(2)', borderColor: 'var(--bs-pink)', color: 'var(--bs-light)', margin: '10px', marginLeft: '0px'}} />
            <div className="sidebar-brand-icon rotate-n-15" />
            <div className="sidebar-brand-text mx-3"><span>KiteLearn</span></div>
          </a>
          <hr className="sidebar-divider my-0" />
                <ul className="navbar-nav text-light" id="accordionSidebar">
                    <li className="nav-item"><NavLink tag={Link} className="nav-link active" to="/adminhome"><i className="fas fa-tachometer-alt" style={{ transform: 'scale(1.83)' }} /><span style={{ margin: '10px' }}>Dashboard</span></NavLink></li>
                    <li className="nav-item"><NavLink tag={Link} className="nav-link" to="/adminuser"><i className="fas fa-user" style={{ transform: 'scale(1.83)' }} /><span style={{ margin: '10px' }}>Users</span></NavLink></li>
                    <li className="nav-item"><NavLink tag={Link} className="nav-link" to="/adminnews"><i className="la la-newspaper-o" style={{ transform: 'scale(1.83)' }} /><span style={{ margin: '10px' }}>News</span></NavLink></li>
                    <li className="nav-item"><NavLink tag={Link} className="nav-link" to="/admincontact"><i className="fa fa-envelope-o" style={{ transform: 'scale(1.83)' }} /><span style={{ margin: '10px' }}>Inbox</span></NavLink>
                        <NavLink tag={Link} to="/adminvideo" className="nav-link"><i className="fa fa-film" style={{ transform: 'scale(1.83)' }} /><span style={{ margin: '10px' }}>Videos</span></NavLink></li>
                  
          </ul>
         
        </div>
      </nav>
    );
}