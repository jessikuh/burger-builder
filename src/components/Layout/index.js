import React, { Fragment } from 'react';

import classes from './Layout.module.scss';

const layout = ({ children }) => (
  <Fragment>
    <div>
      Toolbar, SideDrawer, Backdrop
    </div>
    <main className={classes.content}>
      {children}
    </main>
  </Fragment>
);

export default layout;
