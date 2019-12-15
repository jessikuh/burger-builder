import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger';
import BuildControls from '../../components/Burger/BuildControls';

// Global variables are typically named in all caps
const INGREDIENT_PRICES = {
  salad: .5,
  cheese: .4,
  meat: 1.3,
  bacon: .7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0
    },
    totalPrice: 4
  };

  addIngredientHandler = (type) => {
    const originalCount = this.state.ingredients[type];
    const updatedCount = originalCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };

    updatedIngredients[type] = updatedCount;

    const ingredientCost = INGREDIENT_PRICES[type];
    const originalPrice = this.state.totalPrice;
    const updatedPrice = originalPrice + ingredientCost;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    });
  };

  removeIngredientHandler = (type) => {
    const originalCount = this.state.ingredients[type];

    if (originalCount <= 0) {
      return;
    }

    const updatedCount = originalCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };

    updatedIngredients[type] = updatedCount;

    const ingredientCost = INGREDIENT_PRICES[type];
    const originalPrice = this.state.totalPrice;
    const updatedPrice = originalPrice - ingredientCost;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    });
  };

  render () {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientRemoved={this.removeIngredientHandler}
          ingredientAdded={this.addIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;