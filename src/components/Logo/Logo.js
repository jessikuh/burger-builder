import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.scss';

const logo = (props) => (
  <div class={classes.logo}>
    <img src={burgerLogo} alt="MyBurger"/>
  </div>
);

export default logo;
