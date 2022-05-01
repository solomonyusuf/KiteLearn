import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import  Home  from './components/Home';
import Details from './components/details';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';
import './custom.css';
import  Catering  from './components/videos/Catering';
import  Music  from './components/videos/Music';
import  Tech  from './components/videos/Tech';
import  Food from './components/videos/Food';
import Contact from './components/Contact';
import Admincontact from './components/admin/admin-contact';
import Addvideo from './components/admin/add-video';
import Adminvideo from './components/admin/admin-video';
import EmployeeList from './components/admin/EmployeeList';
import Employee from './components/admin/Employee';
import Uploadvideo from './components/uploads/uploadvideo';
import Uploadimg from './components/uploads/uploadimg';
import Addnews from './components/admin/add-news';
import Editnews from './components/admin/edit-news';
import Adminnews from './components/admin/admin-news';
import Editvideo from './components/admin/edit-video';
import Adminhome from './components/admin/admin-home';
import Sidebar from './components/admin/sidebar';
import News from './components/news';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import Adminuser from './components/admin/admin-users';
import Editusers from './components/admin/edit-users';
//component = { ApiAuthorizationRoutes }

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/catering' component={Catering} />
            <Route exact path='/food' component={Food} />
            <Route exact path='/tech' component={Tech} />
            <Route exact path='/music' component={Music} />
            <Route exact path='/adminvideo' component={Adminvideo} />
            <Route exact path='/addvideo' component={Addvideo} />
            <Route path='/contact' component={Contact} />
            <Route path='/adminhome' component={Adminhome} />
            <Route path='/admincontact' component={Admincontact} />
            <Route path='/uploadimg' component={Uploadimg} />
            <Route path='/uploadvideo' component={Uploadvideo} />
            <Route path='/employeelist' component={EmployeeList} />
            <Route path='/employee' component={Employee} />
            <Route path='/adminnews' component={Adminnews} />
            <Route path='/addnews' component={Addnews} />
            <Route path='/editnews/:id' component={Editnews} />
            <Route path='/editvideo/:id' component={Editvideo} />
            <Route path='/sidebar' component={Sidebar} />
            <Route path='/news' component={News} />
            <Route path='/adminuser' component={Adminuser} />
            <Route path='/editusers/:id' component={Editusers} />

        <Route path='/details/:id' component={Details} />
            <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
        </Layout>
    );
  }
}
