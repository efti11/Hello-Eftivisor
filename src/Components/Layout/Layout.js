import React from 'react';
import Aux from '../../hoc/auxe';
import Header from '../UI/Navigation/tools';
import Backdrop from '../UI/Backdrop/Backdrop';
import SideDrawer from '../UI/Navigation/sideDrawer';

const layout =  (props ) => (
    <Aux>
    <Header />
    <main>
        {props.children}
        </main>
    <div>footer</div>
    </Aux>
);

export default layout;