import React , {Component , useEffect, useState } from 'react';
import  '../../UI/Navigation/tools.css'; 

import Backdrop from '../Backdrop/Backdrop';
import NavigationItems from '../Navigation/NavigationItems';




const Toolbar = (props)  => {

  const  [click, setClick] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  
  const handleClick = () => {
    setClick(!click)
    setBackdrop(!backdrop);   
  }
  
 return (<header className="site-header">
  <div className="inner-container">
      <button onClick={handleClick} className={click?'nav-toggle nav-close':'nav-toggle nav-menu'} name="Open Menu"></button>
        <div class="site-logo">
          EftiVisor
        </div>
       
        <button class="nav-search" name="Search"> </button>
       
  <nav className={click?"site-nav.is--active":"site-nav" } >
  <button onClick={handleClick} className= {click?'nav-toggle nav-close':'nav-toggle nav-menu'} name="Close Menu"></button>
     <NavigationItems />
    </nav>
  </div>
  </header>
 );
}


export default Toolbar;