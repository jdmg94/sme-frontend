/**
 * @Author: JoseMunoz
 * @Date:   2018-08-02T10:47:41-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T18:32:13-06:00
 */
import { expect } from 'chai';
import * as actions from './Toppings.ducks';
import { CLEAR_ALL } from '../Checkout/Checkout.ducks';
import { fetchToppings } from '../../services/Toppings';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import sagas, { getToppings, clearSelection } from './Toppings.sagas';

describe('Toppings sagas', () => {
  describe('getToppings', () => {
    let nextValue;
    let expectedResult;
    const generator = getToppings();

    it('should get data from a service', () => {
      nextValue = generator.next().value;
      expectedResult = call(fetchToppings);

      expect(nextValue).to.deep.equal(expectedResult)
    });

    it('should dispatch a successful action', () => {
      nextValue = generator.next([]).value;
      expectedResult = put(actions.fetchSuccess([]));

      expect(nextValue).to.deep.equal(expectedResult);
    });

    it('should be done', () => {
      nextValue = generator.next().done;

      expect(nextValue).to.equal(true);
    });
  });

  describe('clearSelection', () => {
    let nextValue;
    const generator = clearSelection();

    it('should dispatch a clear toppings action', () => {
      nextValue = generator.next().value;
      const expectedResult = put(actions.clearToppings());

      expect(nextValue).to.deep.equal(expectedResult);
    });

    it('should be done', () => {
      nextValue = generator.next().done;

      expect(nextValue).to.equal(true);
    });
  });

  describe('sagas', () => {
    let nextValue;
    const generator = sagas();

    it('should expose its generators', () => {
      nextValue = generator.next().value;
      const expectedResult = all([
        takeLatest(CLEAR_ALL, clearSelection),
        takeLatest(actions.FETCH_TOPPINGS, getToppings),
      ]);

      expect(nextValue).to.deep.equal(expectedResult);
    });

    it('should be done', () => {
      nextValue = generator.next().done;

      expect(nextValue).to.equal(true);
    });
  });
});
