/**
 * @Author: JoseMunoz
 * @Date:   2018-08-02T11:01:12-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T14:24:58-06:00
 */
import { expect } from 'chai';
import reducer, {
  CALCULATE_ORDER,
  PROCESS_ORDER,
  processOrder,
  calculateOrder,
} from './Checkout.ducks';

describe('Checkout ducks', () => {
  describe('processOrder', () => {
    it('should process the order', () => {
      const nextValue = processOrder();
      const expectedResult = { type: PROCESS_ORDER };

      expect(nextValue).to.deep.equal(expectedResult);
    });
  });

  describe('calculateOrder', () => {
    it('should calculate the current selection to provide a detail', () => {
      const toppings = [];
      const order = { toppings };
      const expectedResult = {
        payload: { order },
        type: CALCULATE_ORDER,
      };

      const nextValue = calculateOrder({ toppings });

      expect(nextValue).to.deep.equal(expectedResult);
    });
  });

  describe('reducer', () => {
    it('should process the CALCULATE_ORDER action', () => {
      const order = {};
      const state = {
        order,
        tax: 0.5,
        basePrice: 1,
      };

      const expectedResult = {
        order,
        tax: 0.5,
        total: 1.5,
        taxDue: 0.5,
        subtotal: 1,
        basePrice: 1,
      };

      const action = {
        type: CALCULATE_ORDER,
        payload: { order }
      };

      const nextValue = reducer(state, action);

      expect(nextValue).to.deep.equal(expectedResult);
    });
  });
});
