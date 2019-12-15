import React, { Fragment } from 'react';

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map((igKey) => {
      return (
        <li key={igKey + Date.now()}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
      );
    });

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>
        A delicious burger with the following ingredients:
      </p>

      <ul>
        {ingredientSummary}
      </ul>

      <p>
        Continue to checkout?
      </p>

      <Button
        clicked={props.purchaseCancelled}
        btnType="Danger">
        Cancel
      </Button>
      <Button
        clicked={props.purchaseContinue}
        btnType="Success">
        Continue
      </Button>
    </Fragment>
  )
};

export default orderSummary;
