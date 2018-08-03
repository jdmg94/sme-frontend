/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T16:35:59-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-01T21:16:04-06:00
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, Header } from 'semantic-ui-react';

const Home = () => (
  <Grid>
    <Grid.Row centered>
      <Grid.Column textAlign="center">
        <Header>Choose the best ingredients, make it your own!</Header>
        <Button
          positive
          as={Link}
          to="/Dough"
          size="huge"
        >
          Let's make some pizza!
        </Button>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Home;
