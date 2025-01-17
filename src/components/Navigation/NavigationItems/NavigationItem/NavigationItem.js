import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.scss';

const navigationItem = (props) => (
  <li className={classes.navigation_item}>
    <NavLink
      exact
      to={props.link}
      activeClassName={classes.active}
    >
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
