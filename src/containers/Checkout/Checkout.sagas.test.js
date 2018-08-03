/**
 * @Author: JoseMunoz
 * @Date:   2018-08-02T14:25:56-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T18:03:21-06:00
 */
import { expect } from 'chai';
import sagas from './Checkout.sagas';
import { processOrder } from '../../services/Orders';
import { submitOrder, orderDetails } from './Checkout.sagas';
import { PROCESS_ORDER, ORDER_SUCCESS, clearAll } from './Checkout.ducks';
import { all, call, select, put, takeLatest } from 'redux-saga/effects';

describe('Checkout sagas', () => {
  describe('submitOrder', () => {
    let nextValue;
    let expectedResult;
    const generator = submitOrder();
    it('should retrieve the order details', () => {
      nextValue = generator.next().value;
      expectedResult = select(orderDetails);

      expect(nextValue).to.deep.equal(expectedResult);
    });

    it('should post to a service with the order details', () => {
      nextValue = generator.next(null).value;
      expectedResult = call(processOrder, null)

      expect(nextValue).to.deep.equal(expectedResult);
    });

    it('should dispatch the successful operation', () => {
      nextValue = generator.next().value;
      expectedResult = put({ type: ORDER_SUCCESS });

      expect(nextValue).to.deep.equal(expectedResult);
    });

    it('should dispatch a CLEAR_ALL action for other reducers to clear', () => {
      nextValue = generator.next().value;
      expectedResult = put(clearAll());

      expect(nextValue).to.deep.equal(expectedResult);
    });

    it('should finalize', () => {
      nextValue = generator.next().done;

      expect(nextValue).to.equal(true);
    });
  });

  describe('sagas', () => {
    let nextValue;
    const generator = sagas();

    it('should fork submitOrder', () => {
      nextValue = generator.next().value;
      const expectedResult = all([ takeLatest(PROCESS_ORDER, submitOrder)]);

      expect(nextValue).to.deep.equal(expectedResult);
    });

    it('should be done', () => {
      nextValue = generator.next().done;

      expect(nextValue).to.equal(true);
    });
  });
});
