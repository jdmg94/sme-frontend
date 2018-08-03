/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T10:41:12-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-01T14:41:53-06:00
 */
import React from 'react';
import Sauces from './Sauces';
import { configure, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

const adapter = new Adapter();
const mockStore = configureStore();

configure({ adapter });

it('should render without crashing', () => {
  const store = mockStore({ Sauces:{} });

  shallow(<Sauces store={store} />);
});
