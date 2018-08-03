/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T14:48:12-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-01T19:36:43-06:00
 */

import React from 'react';
import { Step } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Steps = () => (
  <Step.Group>
    <Step
      as={NavLink}
      to="/Dough"
    >
      <Step.Content>
        <Step.Title>
          Select Your Dough!
        </Step.Title>
      </Step.Content>
    </Step>
    <Step
      as={NavLink}
      to="/Sauce"
    >
      <Step.Content>
        <Step.Title>
          Choose your Sauce
        </Step.Title>
      </Step.Content>
    </Step>
    <Step
      as={NavLink}
      to="/Toppings"
    >
      <Step.Content>
        <Step.Title>
          Add Some Toppings
        </Step.Title>
      </Step.Content>
    </Step>
    <Step
      as={NavLink}
      to="/Checkout"
    >
      <Step.Content>
        <Step.Title>
          Checkout
        </Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
);

export default Steps;
