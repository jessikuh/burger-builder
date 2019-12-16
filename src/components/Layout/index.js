import React, { Fragment } from 'react';

import classes from './Layout.module.scss';

import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = ({ children }) => (
  <Fragment>
    <div>
      <Toolbar />
    </div>
    <main className={classes.content}>
      {children}
    </main>
  </Fragment>
);

export default layout;
