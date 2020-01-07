import React, { Component } from 'react';

import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.scss';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
    purchasing: false,
  };

  orderHandler = (event) => {
    event.preventDefault();

    const { ingredients, price } = this.props;

    this.setState({ loading: true });
    const order = {
      ingredients,
      price,
      customer: {
        name: 'Jessica Stamos',
        address: {
          street: 'Test Street',
          zipCode: '42344',
          country: 'United States',
        },
        email: 'jessicanstamos@gmail.com',
      },
      deliveryMethod: 'fastest',
    };

    axios.post('/orders.json', order)
      .then((response) => {
        this.setState({
          loading: false,
        });
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({
          loading: false,
        });
      });
  };

  render() {
    let form = (
      <form>
        <Input inputtype="input" type="text" name="name" placeholder="Your Name" />
        <Input inputtype="input" type="email" name="email" placeholder="Your Email" />
        <Input inputtype="input" type="text" name="street" placeholder="Your Street" />
        <Input inputtype="input" type="text" name="postal" placeholder="Your Postal Code" />
        <Button
          btnType="Success"
          clicked={this.orderHandler}
        >
          ORDER
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Information</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
