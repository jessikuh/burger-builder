import React, { Component, Fragment } from 'react';

import Button from '../../UI/Button/Button';

// This could be converted back to functional component if not using componentDidUpdate
class OrderSummary extends Component {
  // Used to test if this was still updating
  // componentDidUpdate () {
  //   console.log('Order summary will update')
  // }

  render () {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map((igKey) => {
        return (
          <li key={igKey + Date.now()}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
          </li>
        );
      });

    return (
      <Fragment>
        <h3>Your Order</h3>
        <p>
          A delicious burger with the following ingredients:
        </p>

        <p>
          <strong>Total Price: ${this.props.total.toFixed(2)}</strong>
        </p>

        <ul>
          {ingredientSummary}
        </ul>

        <p>
          Continue to checkout?
        </p>

        <Button
          clicked={this.props.purchaseCancelled}
          btnType="Danger">
          Cancel
        </Button>
        <Button
          clicked={this.props.purchaseContinue}
          btnType="Success">
          Continue
        </Button>
      </Fragment>
    )
  }
};

export default OrderSummary;
