import React, { Fragment } from 'react';

import classes from './Layout.module.scss';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = ({ children }) => (
  <Fragment>
    <Toolbar />
    <SideDrawer />
    <main className={classes.content}>
      {children}
    </main>
  </Fragment>
);

export default layout;
