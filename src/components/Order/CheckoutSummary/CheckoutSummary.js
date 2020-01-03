import React from 'react';

import Burger from '../../Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.module.scss';

const CheckoutSummary = (props) => (
  <div className={classes.CheckoutSummary}>
    <h1>We hope it tastes well!</h1>
    <div style={{ width: '100%', margin: 'auto' }}>
      <Burger ingredients={props.ingredients} />
    </div>
    <Button btnType="Danger" clicked>CANCEL</Button>
    <Button btnType="Success" clicked>CONTINUE</Button>
  </div>
);

export default CheckoutSummary;
