import React, { Component } from 'react';
import axios from '../../axios-orders';

import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axios.get('/orders.json')
      .then((response) => {
        const fetchedOrders = [];

        Object.keys(response.data).forEach((key) => {
          fetchedOrders.push({
            ...response.data[key],
            id: key,
          });
        });

        this.setState({
          loading: false,
          orders: fetchedOrders,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.orders.map(({ id, ingredients, price }) => (
          <Order
            key={id}
            ingredients={ingredients}
            price={price}
          />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
