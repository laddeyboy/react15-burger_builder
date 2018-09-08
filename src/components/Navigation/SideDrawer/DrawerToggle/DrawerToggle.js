import React from 'react'

import classes from './DrawerToggle.css'

// import Logo from '../../../Logo/Logo'

const drawerToggle = (props) => (
  // <Logo />
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);


export default drawerToggle;