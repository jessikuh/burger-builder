import React, { Component, Fragment } from 'react';

import classes from './Modal.module.scss';

import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  render () {
    return (
      <Fragment>
        <Backdrop
          show={this.props.show}
          clicked={this.props.modalClosed}
        />
        <div
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
          className={classes.Modal}>
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default Modal;
