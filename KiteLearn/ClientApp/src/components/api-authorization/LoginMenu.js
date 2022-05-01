import React, { Component, Fragment } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import authService from './AuthorizeService';
import { ApplicationPaths } from './ApiAuthorizationConstants';

export class LoginMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            userName: null, 
            imgPath:null
        };
    }

    componentDidMount() {
        this._subscription = authService.subscribe(() => this.populateState());
        this.populateState();
    }

    componentWillUnmount() {
        authService.unsubscribe(this._subscription);
    }

    async populateState() {
        const [isAuthenticated, user] = await Promise.all([authService.isAuthenticated(), authService.getUser()])
        this.setState({
            isAuthenticated,
            userName: user && user.name,
            imgPath: user && user.imgPath
        });
    }

    render() {
        const { isAuthenticated, userName, imgPath } = this.state;
        if (!isAuthenticated) {
            const registerPath = `${ApplicationPaths.Register}`;
            const loginPath = `${ApplicationPaths.Login}`;
            return this.anonymousView(registerPath, loginPath);
        } else {
            const profilePath = `${ApplicationPaths.Profile}`;
            const logoutPath = { pathname: `${ApplicationPaths.LogOut}`, state: { local: true } };
            return this.authenticatedView(userName, imgPath, profilePath, logoutPath);
        }
    }
    
    authenticatedView(userName, imgPath, profilePath, logoutPath) {
        console.log(userName);
        return (<Fragment>
            <NavItem>
                <NavLink tag={Link} className="text-dark" to={profilePath}><p style={{ margin: '10px' }}>|</p><img src={imgPath} style={{ borderRadius: '15px', width: '30px', height: '30px', margin: '0px' }} />
                    <p style={{ margin: '10px' }}><strong> {userName}!{imgPath}</strong></p></NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} className="text-dark" to={logoutPath}><i class="la la-sign-out" style={{ margin: '10px', color: 'var(--bs-pink)', transform: 'scale(1.83)' }} ></i></NavLink>
            </NavItem>
        </Fragment>);

    }
    
    anonymousView(registerPath, loginPath) {
        return (<Fragment>
            <NavItem>
                <NavLink tag={Link} className="text-dark " to={registerPath}><a className="btn btn-outline-danger">Register</a></NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} className="text-dark" to={loginPath}><i className="la la-sign-in" style={{ transform: 'scale(1.83)', borderColor: 'var(--bs-pink)', color: 'var(--bs-pink)',margin: '10px' }}></i></NavLink>
            </NavItem>
        </Fragment>);
    }
}
