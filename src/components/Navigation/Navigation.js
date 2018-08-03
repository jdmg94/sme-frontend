/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T16:24:20-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-01T16:25:22-06:00
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
const Navigation = () => (
  <Menu>
    <Menu.Item
      to="/"
      as={Link}
    >
      <Icon name="chart pie" />
      Social Media Emotions Pizzeria
    </Menu.Item>
  </Menu>
);

export default Navigation;
