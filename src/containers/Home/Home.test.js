/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T16:38:01-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-01T16:39:40-06:00
 */
import React from 'react';
import Home from './Home';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const adapter = new Adapter();
configure({ adapter });

it('should render without crashing', () => {
  shallow(<Home />);
});
