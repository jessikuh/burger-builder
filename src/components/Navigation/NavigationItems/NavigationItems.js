import React from 'react';

import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={classes.navigation_items}>
    <NavigationItem link="/" active>Burger Builder</NavigationItem>
    <NavigationItem link="/checkout">Checkout</NavigationItem>
  </ul>
);

export default navigationItems;
