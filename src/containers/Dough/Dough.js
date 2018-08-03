/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T10:04:09-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T10:36:19-06:00
 */
import { Trail } from 'react-spring';
import { connect } from 'react-redux';
import * as actions from './Dough.ducks';
import React, { Component } from 'react';
import Steps from '../../components/Steps';
import { Link } from 'react-router-dom';
import { map, reduce, isEmpty } from 'lodash';
import { mergeProps } from '../../utils/helper';
import MenuItem from '../../components/MenuItem';
import { Grid, Button, Segment } from 'semantic-ui-react';


const mapStateToProps = state => ({
  options: state.Dough.options,
  selection: state.Dough.selection,
  isFetching: state.Dough.isFetching,
});

class Dough extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    const { fetchDough } = this.props;

    fetchDough();
  }

  handleClick(id, evt){
    const { selectDough, options } = this.props;
    const dough = reduce(options, (result, item) => {
      if(item.id === id){
        result = item;
      }

      return result;
    }, {});

    selectDough(dough)
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
              to="/Sauce"
              disabled={isEmpty(selection)}
            >
              Go for Sauces!
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
            keys={map(options, ({ id }) => `dough-${id}`)}
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
                  key={`dough-${item.id}`}
                >
                  <MenuItem
                    id={item.id}
                    image={item.image}
                    title={item.label}
                    price={item.price}
                    onClick={this.handleClick}
                    active={item === selection}
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

export default connect(mapStateToProps, actions, mergeProps)(Dough);
