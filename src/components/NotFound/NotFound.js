/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T15:01:55-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-01T17:23:38-06:00
 */
import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

const NotFound = () => (
  <Grid>
    <Grid.Row centered>
      <Grid.Column
        stretched
        padded="vertically"
        verticalAlign="middle"
      >
        <Header
          as="h1"
          textAlign="center"
        >
          This slice was not found!
        </Header>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default NotFound;
