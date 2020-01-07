import React from 'react';

import classes from './Order.module.scss';

const order = () => (
  <div className={classes.Order}>
    <p>Ingredients: Salad ()</p>
    <p>
      Price:
      <strong> USD 5.45</strong>
    </p>
  </div>
);

export default order;
