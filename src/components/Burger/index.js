import React from 'react';

import classes from './Burger.module.scss';

import Ingredient from './Ingredient';

const burger = ({ ingredients }) => {
  const transformedIngredients = Object.keys(ingredients)
    .map((igKey) => {
      return [...Array(ingredients[igKey])]
        .map((_, i) => <Ingredient key={igKey + i} type={igKey} />);
    });

  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top" />
      {transformedIngredients}
      <Ingredient type="bread-bottom" />
    </div>
  );
}

export default burger;
