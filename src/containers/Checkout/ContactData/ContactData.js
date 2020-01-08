import React, { Component } from 'react';

import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.scss';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          name: 'name',
          placeholder: 'Your Name',
        },
        label: 'Your Name',
        value: '',
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          name: 'email',
          placeholder: 'Your Email',
        },
        value: '',
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          name: 'street',
          placeholder: 'Your Street',
        },
        value: '',
      },
      postalCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          name: 'postal',
          placeholder: 'Your Postal Code',
        },
        value: '',
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          name: 'country',
          placeholder: 'Your Country',
        },
        label: 'Your Country',
        value: '',
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {
              value: 'fastest',
              displayValue: 'Fastest',
            },
            {
              value: 'cheapest',
              displayValue: 'Cheapest',
            },
          ],
        },
        value: '',
      },
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

  inputChangedHandler = (inputIdentifier) => (event) => {
    const updatedOrderForm = { ...this.state.orderForm };

    // Deep clone
    const updatedFormElement = { ...updatedOrderForm[inputIdentifier] };

    updatedFormElement.value = event.target.value;

    updatedOrderForm[inputIdentifier] = updatedFormElement;

    this.setState({
      orderForm: updatedOrderForm,
    });
  };

  render() {
    const formElementsArray = [];

    Object.keys(this.state.orderForm).forEach((key) => {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    });

    let form = (
      <form>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            label={formElement.config.label}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            //
            changed={this.inputChangedHandler(formElement.id)}
          />
        ))}
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
