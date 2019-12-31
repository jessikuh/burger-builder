import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger';
import BuildControls from '../../components/Burger/BuildControls';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';


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
    purchasable: false,
    totalPrice: 4,
    purchasing: false,
    loading: false
  };

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

      this.setState({
        purchasable: sum > 0
      });
  }

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
    this.updatePurchaseState(updatedIngredients);
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
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false})
  }

  purchaseContinueHandler = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Jessica Stamos',
        address: {
          street: 'Test Street',
          zipCode: '42344',
          country: 'United States'
        },
        email: 'jessicanstamos@gmail.com'
      },
      deliveryMethod: 'fastest',
    };

    axios.post('/orders.json', order)
      .then(response => {
        this.setState({
          loading: false,
          purchasing: false,
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          purchasing: false,
        });
      });
  };

  render () {
    const disabledInfo = {
      ...this.state.ingredients
    };

    let orderSummary = <OrderSummary
      total={this.state.totalPrice}
      ingredients={this.state.ingredients}
      purchaseCancelled={this.purchaseCancelHandler}
      purchaseContinue={this.purchaseContinueHandler}
    />;

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Fragment>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientRemoved={this.removeIngredientHandler}
          ingredientAdded={this.addIngredientHandler}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          price={this.state.totalPrice}
          ordered={this.purchaseHandler}
        />
      </Fragment>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);