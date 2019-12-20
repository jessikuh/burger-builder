import React from 'react';

import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <div className={classes.logo}>
      <Logo />
    </div>
    <nav className={classes.desktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
