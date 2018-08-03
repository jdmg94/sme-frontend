/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T19:43:41-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-01T19:59:55-06:00
 */
import React from 'react';
import MenuItem from './MenuItem';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const adapter = new Adapter();
configure({ adapter });

it('should render without crashing', () => {
  shallow(<MenuItem />);
});
