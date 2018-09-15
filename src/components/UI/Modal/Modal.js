import React, {Component} from 'react'
import classes from './Modal.css'
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'

//Modal is strictly just the box for 'content' so if I want orderSummary (or a Win/Lose Game Component)
//that should get passed to Modal as props.children and then rendered.  

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    //make sure this only updates if show changes
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }
  // componentWillUpdate() {
  //   console.log('[Modal.js] WillUpdate')
  // }
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div 
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </Aux>
    );
  } 
}

export default Modal;