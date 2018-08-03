/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T10:20:32-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T13:33:57-06:00
 */
import PropTypes from 'prop-types';
import { Transition } from 'react-spring';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Steps from '../../components/Steps';
import * as actions from './Toppings.ducks';
import { map, reduce, includes } from 'lodash';
import { mergeProps } from '../../utils/helper';
import MenuItem from '../../components/MenuItem';
import { Grid, Button, Segment } from 'semantic-ui-react';


const mapStateToProps = state => ({
  options: state.Toppings.options,
  selection: state.Toppings.selection,
  isFetching: state.Toppings.isFetching,
});

class Toppings extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    const { fetchToppings } = this.props;

    fetchToppings();
  }

  handleClick(id){
    const {
      options,
      selection,
      selectTopping,
      removeTopping,
    } = this.props;

    const topping = reduce(options, (result, item) => {
      if (item.id === id) {
        result = item;
      }

      return result;
    }, {});

    if(includes(selection, topping)){
      removeTopping(topping);
    }else{
      selectTopping(topping);
    }
  }

  render(){
    const {
      options,
      selection,
      isFetching,
    } = this.props;

    return (
      <Grid stackable>
        <Grid.Row centered>
          <Steps />
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column textAlign="center">
          {
            !isFetching &&
            <Button
              positive
              as={Link}
              size="huge"
              to="/Checkout"
            >
              Proceed to checkout
            </Button>

          }
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          columns={4}
          centered={isFetching}
        >
        {
          isFetching ?
          <Grid.Column textAlign="center">
            <Segment
              basic
              padded
              loading
              size="huge"
            />
          </Grid.Column> :
          <Transition
            keys={map(options, ({ id }) => `topping-${id}`)}
            from={{
              opacity: 0,
              transform: 'translateY(10rem)',
            }}
            enter={{
              opacity: 1,
              transform: 'translateY(0)',
            }}
            leave={{
              opacity: 0,
              transform: 'translateX(-10rem)',
            }}
          >
          {
            map(options, item => styles => (
              <Grid.Column
                style={styles}
                key={`topping-${item.id}`}
              >
                <MenuItem
                  active={includes(selection, item)}
                  id={item.id}
                  image={item.image}
                  title={item.label}
                  price={item.price}
                  onClick={this.handleClick}
                  description={item.description}
                />
              </Grid.Column>
            ))
          }
          </Transition>
        }
        </Grid.Row>
      </Grid>
    )
  }
}

Toppings.propTypes = {
  options: PropTypes.array,
  selection: PropTypes.array,
  isFetching: PropTypes.bool,
};

export default connect(mapStateToProps, actions, mergeProps)(Toppings);
