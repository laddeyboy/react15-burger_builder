import React, {Component} from 'react'
import Aux from '../../hoc/Aux'

import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state = {
    showSideDrawer: true
  }
  
  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  sideDrawerToggleHandler = () => {
    //this is the cleaniset way of setting the state, WHEN dependent on the old state
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    });
  }

  render() {
    return(
      <Aux>
      {/* this layout is a basic wrapper for our content that's going to be output to the screen */}
      {/* NOTES: first div is a place holder for our future Navbar */}
      {/* ****<div>Toolbar, SideDrawer, Backdrop</div>**** */}
      <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
      <SideDrawer 
        open={this.state.showSideDrawer} 
        closed={this.sideDrawerClosedHandler}/>
      {/* NOTES: <main> is going to be our actual content */}
      <main className={classes.Content}>
        {this.props.children}
      </main>
    </Aux>
    );
  }

}

export default Layout