import React from 'react';

import Backdrop from '../Backdrop/Backdrop';

import NavigationItems from '../Navigation/NavigationItems';





const sideDrawer= (props) => (

      <div className= "SideDrawer">
        <button className="nav-toggle nav-close" name="Close Menu"></button>
        <NavigationItems />
      </div>
     
      
);

export default sideDrawer;