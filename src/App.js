import React from 'react';
import { Route } from 'react-router-dom';

import Layout from './hoc/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

function App() {
  return (
    <div>
      <Layout>
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/" component={BurgerBuilder} />
      </Layout>
    </div>
  );
}

export default App;
