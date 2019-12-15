import React from 'react';
import PropTypes from 'prop-types';

import classes from './Ingredient.module.scss';

const ingredient = ({ type }) => {
  let ingredient = null;

  switch (type) {
    case ('bread-bottom'):
      ingredient = <div className={classes.BreadBottom}></div>;
      break;
    case ('bread-top'):
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case ('meat'):
      ingredient = <div className={classes.Meat}></div>;
      break;
    case ('bacon'):
      ingredient = <div className={classes.Bacon}></div>;
      break;
    case ('salad'):
      ingredient = <div className={classes.Salad}></div>;
      break;
    case ('cheese'):
      ingredient = <div className={classes.Cheese}></div>;
      break;
    default:
      ingredient = null;
  };

  return (
    <div>

    </div>
  )
};

ingredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default ingredient;
