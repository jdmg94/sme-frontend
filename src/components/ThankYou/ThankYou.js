/**
 * @Author: JoseMunoz
 * @Date:   2018-08-02T13:23:27-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T18:01:16-06:00
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Grid, Button } from 'semantic-ui-react';

const ThankYou = () => {
  return (
    <Grid>
      <Grid.Row centered>
        <Grid.Column textAlign="center">
          <Header size="huge">
            Grazie Mille!
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column textAlign="center">
          <Button
            to="/"
            as={Link}
            size="huge"
            color="blue"
          >
            Go to Start
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
};

export default ThankYou;
