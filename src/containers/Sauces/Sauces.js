/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T10:19:23-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T11:05:01-06:00
 */
import PropTypes from 'prop-types';
import { Trail } from 'react-spring';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import * as actions from './Sauces.ducks';
import Steps from '../../components/Steps';
import { map, reduce, isEmpty } from 'lodash';
import { mergeProps } from '../../utils/helper';
import MenuItem from '../../components/MenuItem';
import { Grid, Button, Segment } from 'semantic-ui-react';

const mapStateToProps = state => ({
  options: state.Sauces.options,
  selection: state.Sauces.selection,
  isFetching: state.Sauces.isFetching,
});

class Sauces extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    const { fetchSauces } = this.props;

    fetchSauces();
  }

  handleClick(id, evt){
    const { options, selectSauce } = this.props;
    const sauce = reduce(options, (result, item) => {
      if (item.id === id) {
        result = item;
      }

      return result;
    } ,{});

    selectSauce(sauce);
  }

  render(){
    const {
      options,
      selection,
      isFetching,
    } = this.props;

    return (
      <Grid stackable>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Steps />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column textAlign="center">
          {
            !isFetching &&
            <Button
              positive
              as={Link}
              size="huge"
              to="/Toppings"
              disabled={isEmpty(selection)}
            >
              Only the top toppings!
            </Button>
          }
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          columns={3}
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
          <Trail
            keys={map(options, ({ id }) => `sauce-${id}`)}
            from={{
              opacity: 0,
              transform: 'translateY(10rem)',
            }}
            to={{
              opacity: 1,
              transform: 'translateY(0)',
            }}
          >
          {
            map(options, item => styles => (
              <Grid.Column
                style={styles}
                key={`sauce-${item.id}`}
              >
                <MenuItem
                  id={item.id}
                  image={item.image}
                  title={item.label}
                  price={item.price}
                  onClick={this.handleClick}
                  active={selection === item}
                  description={item.description}
                />
              </Grid.Column>
            ))
          }
          </Trail>
        }
        </Grid.Row>
      </Grid>
    )
  }
}

Sauces.propTypes = {
  options: PropTypes.array,
};

export default connect(mapStateToProps, actions, mergeProps)(Sauces);
