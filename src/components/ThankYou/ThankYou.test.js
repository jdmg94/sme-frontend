/**
 * @Author: JoseMunoz
 * @Date:   2018-08-02T13:23:36-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T14:07:15-06:00
 */
import React from 'react';
import ThankYou from './ThankYou';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const adapter = new Adapter();
configure({ adapter });

describe('ThanYou', () => {
  it('should render without crashing', () => {
    shallow(<ThankYou />);
  });
});
