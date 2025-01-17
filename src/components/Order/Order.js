import React from 'react';

import classes from './Order.module.scss';

const order = (props) => {
  const { ingredients, price } = props;

  const ingredientsArray = [];

  Object.keys(ingredients).forEach((ingredient) => {
    ingredientsArray.push({
      name: ingredient,
      amount: ingredients[ingredient],
    });
  });

  const ingredientOutput = ingredientsArray.map((ig) => (
    <span
      key={ig.name}
      style={{
        textTransform: 'capitalize',
        display: 'inline-block',
        margin: '0 8px',
        border: '1px solid #ccc',
        padding: '5px',
      }}
    >
      {ig.name}
      {' '}
(
      {ig.amount}
)
    </span>
  ));

  return (
    <div className={classes.Order}>
      <p>
Ingredients:
        {ingredientOutput}
      </p>
      <p>
    Price:
        {' '}
        <strong>
    USD
          {' '}
    $
          {Number.parseFloat(price).toFixed(2)}
        </strong>
      </p>
    </div>
  );
};

export default order;
