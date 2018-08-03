/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T10:41:38-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T14:06:50-06:00
 */
import React from 'react';
import Checkout from './Checkout';
import { configure, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

const adapter = new Adapter();
const mockStore = configureStore();

configure({ adapter });

it('should render without crashing', () => {
 const store = mockStore({
   Dough: {},
   Sauces: {},
   Toppings: [],
   Checkout:{
     basePrice: 4,
     subtotal: 4,
     tax: 0.09,
     taxDue: 0,
     total: 4,
   }
 });

 shallow(<Checkout store={store} />);
});
