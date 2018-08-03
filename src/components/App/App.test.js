/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T07:55:50-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-01T14:39:26-06:00
 */
import React from 'react';
import App from './App';
import { configure, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

const mockStore = configureStore();
const adapter = new Adapter();

configure({ adapter });

it('renders without crashing', () => {
  const store = mockStore({ App:{} });

  shallow(<App store={store} />);
});
