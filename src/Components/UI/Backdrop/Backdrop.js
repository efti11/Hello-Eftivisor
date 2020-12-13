import React from 'react';
import '../Backdrop/Backdrop.css';

const Backdrop = (props) => (
     <div className="backdrop" onClick={props.click}></div>
);

export default Backdrop;