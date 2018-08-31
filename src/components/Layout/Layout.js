import React from 'react'
import Aux from '../../hoc/Aux'

const layout = (props) => (
  <Aux>
    {/* this layout is a basic wrapper for our content that's going to be output to the screen */}
    {/* NOTES: first div is a place holder for our future Navbar */}
    <div>Toolbar, SideDrawer, Backdrop</div>
    {/* NOTES: <main> is going to be our actual content */}
    <main>
      {props.children}
    </main>
  </Aux>
)
export default layout