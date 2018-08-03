/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T10:36:46-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T17:10:05-06:00
 */
import PropTypes from 'prop-types';
import { map, isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Steps from '../../components/Steps';
import * as actions from './Checkout.ducks';
import { mergeProps } from '../../utils/helper';
import MenuItem from '../../components/MenuItem';
import {
  Grid,
  Button,
  Header,
  Segment,
} from 'semantic-ui-react';

const mapStateToProps = state => ({
  total: state.Checkout.total,
  dough: state.Dough.selection,
  sauce: state.Sauces.selection,
  taxDue: state.Checkout.taxDue,
  subtotal: state.Checkout.subtotal,
  toppings: state.Toppings.selection,
  basePrice: state.Checkout.basePrice,
});

class Checkout extends Component {
  componentDidMount(){
    const {
      dough,
      sauce,
      toppings,
      calculateOrder,
    } = this.props;

    calculateOrder({
      dough,
      sauce,
      toppings,
    });
  }

  render(){
    const {
      total,
      dough,
      sauce,
      taxDue,
      toppings,
      subtotal,
      basePrice,
      processOrder,
    } = this.props;

    const canOrderPizza = !(isEmpty(dough) && isEmpty(sauce));

    return (
      <Grid stackable>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Steps />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column>
            <Header>My Custom Pizza Order</Header>
          {
            canOrderPizza ?
            <Segment.Group>
              <Segment.Group horizontal>
              {
                !isEmpty(dough) &&
                <Segment>
                  <Header>Dough</Header>
                  <MenuItem
                    title={dough.label}
                    price={basePrice}
                    description={dough.description}
                  />
                </Segment>
              }
              {
                !isEmpty(sauce) &&
                <Segment>
                  <Header>Sauce</Header>
                  <MenuItem
                    title={sauce.label}
                    description={sauce.description}
                  />
                </Segment>
              }
              {
                !isEmpty(toppings) &&
                <Segment>
                  <Header>Toppings</Header>
                {
                  map(toppings, item => (
                    <MenuItem
                      key={`toppings-${item.id}`}
                      title={item.label}
                      price={item.price}
                    />
                  ))
                }
                </Segment>
              }
              </Segment.Group>
              <Segment clearing>
                <Header
                  floated="left"
                >
                  Subtotal
                </Header>
                <Header
                  floated="right"
                >
                  <Header.Subheader>
                    {`$${subtotal}`}
                  </Header.Subheader>
                </Header>
              </Segment>
              <Segment clearing>
                <Header
                  floated="left"
                >
                  Tax
                </Header>
                <Header
                  floated="right"
                >
                  <Header.Subheader>
                    {`$${taxDue}`}
                  </Header.Subheader>
                </Header>
              </Segment>
              <Segment clearing>
                <Header
                  floated="left"
                >
                  Total
                </Header>
                <Header
                  floated="right"
                >
                  <Header.Subheader>
                    {`$${total}`}
                  </Header.Subheader>
                </Header>
              </Segment>
            </Segment.Group> :
            <Header textAlign="center">No Pepperoni Bologni here!</Header>
          }
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column textAlign="center">
            <Button
              positive
              as={Link}
              size="huge"
              to="/ThankYou"
              onClick={processOrder}
              disabled={!canOrderPizza}
            >
              Shove to Oven
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

Checkout.propTypes = {
  dough: PropTypes.object,
  sauce: PropTypes.object,
  toppings: PropTypes.array,
};

export default connect(mapStateToProps, actions, mergeProps)(Checkout);
