/**
 * @Author: JoseMunoz
 * @Date:   2018-08-02T08:50:50-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T18:16:25-06:00
 */
import { expect } from 'chai';
import sagas from './Dough.sagas';
import * as actions from './Dough.ducks';
import sagaHelper from 'redux-saga-testing';
import { fetchDough } from '../../services/Dough';
import { getDough, clearDough } from './Dough.sagas';
import { CLEAR_ALL } from '../Checkout/Checkout.ducks';
import { data as options } from '../../data/Dough.json';
import { put, call, takeLatest, all } from 'redux-saga/effects';

describe('Dough sagas', () => {
  describe('getDough', () => {
    let nextValue;
    let expectedResult;
    const generator = getDough();
    it('should retrieve data from a service', () => {
      nextValue = generator.next(options).value;
      expectedResult = call(fetchDough);

      expect(nextValue).to.deep.equal(expectedResult);
    });

    it('should dispatch a successful fetch action', () => {
      nextValue = generator.next([]).value;
      expectedResult = put(actions.fetchSuccess([]));

      expect(nextValue).to.deep.equal(expectedResult);
    });

    it('should be done', () => {
      nextValue = generator.next().done;

      expect(nextValue).to.equal(true);
    });
  });

  describe('clearDough', () => {
    const generator = clearDough();
    it('should dispatch a clear dough action', () => {
      const nextValue = generator.next().value;
      const expectedResult = put(actions.clearSelection());

      expect(nextValue).to.deep.equal(expectedResult);
    });
  });

  describe('sagas', () => {
    const generator = sagas();

    it('should expose its generators', () => {
      const result = generator.next().value;
      const expectedResult = all([
        takeLatest(CLEAR_ALL, clearDough),
        takeLatest(actions.FETCH_OPTIONS, getDough)
      ]);

      expect(result).to.deep.equal(expectedResult);
    });

    it('should be done', () => {
      const result = generator.next().done;

      expect(result).to.equal(true);
    });
  });
});
