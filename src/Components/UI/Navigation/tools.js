import React , {Component} from 'react';
import  '../../UI/Navigation/tools.css'; 
import SideDrawer from '../../UI/Navigation/sideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import NavigationItems from '../Navigation/NavigationItems';

const toolbar = (props)  => (
  <header className="site-header">
  <div className="inner-container">
      <button class="nav-toggle nav-menu" name="Open Menu"></button>
        <div class="site-logo">
          EftiVisor
        </div>
        <button class="nav-search" name="Search"></button>
  
  <nav className="site-nav">
     <NavigationItems />
    </nav>
  </div>
  </header>
);



export default toolbar;