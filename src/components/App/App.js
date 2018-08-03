/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T07:55:50-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T18:35:24-06:00
 */
import React from 'react';
import ThankYou from '../ThankYou';
import NotFound from '../NotFound';
import Navigation from '../Navigation';
import Home from '../../containers/Home';
import Dough from '../../containers/Dough';
import Sauces from '../../containers/Sauces';
import Toppings from '../../containers/Toppings';
import Checkout from '../../containers/Checkout';
import { Grid, Container } from 'semantic-ui-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Grid>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Navigation />
          </Grid.Column>
        </Grid.Row>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Dough" component={Dough} />
            <Route exact path="/Sauce" component={Sauces} />
            <Route exact path="/Toppings" component={Toppings} />
            <Route exact path="/Checkout" component={Checkout} />
            <Route exact path="/ThankYou" component={ThankYou} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Grid>
    </BrowserRouter>
  )
};

export default App;
