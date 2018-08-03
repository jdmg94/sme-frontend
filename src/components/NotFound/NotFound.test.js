/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T15:01:18-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-01T15:03:33-06:00
 */
import React from 'react';
import NotFound from './NotFound';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const adapter = new Adapter();

configure({ adapter });

it('should render without crashing', () => {
  shallow(<NotFound />);
});
