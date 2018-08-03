/**
 * @Author: JoseMunoz
 * @Date:   2018-08-02T09:27:42-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T18:23:04-06:00
 */
import { expect } from 'chai';
import * as actions from './Sauces.ducks';
import { fetchSauce } from '../../services/Sauce';
import { CLEAR_ALL } from '../Checkout/Checkout.ducks';
import sagas, { getSauce, clearSauce } from './Sauces.sagas';
import { all, put, call, takeLatest } from 'redux-saga/effects';

describe('Sauces sagas', () => {
  describe('getSauce', () => {
    let nextValue;
    let expectedResult;
    const generator = getSauce();
    it('should fetch sauces from a service', () => {
      nextValue = generator.next().value;
      expectedResult = call(fetchSauce);

      expect(nextValue).to.deep.equal(expectedResult);
    });

    it('should dispatch a successfull action', () => {
      nextValue = generator.next([]).value;
      expectedResult = put(actions.fetchSuccess([]));

      expect(nextValue).to.deep.equal(expectedResult);
    });

    it('should be done', () => {
      nextValue = generator.next().done;

      expect(nextValue).to.equal(true);
    });
  });

  describe('clearSauce', () => {
    let nextValue;
    const generator = clearSauce();

    it('should dispatch a clear sauce action', () => {
      nextValue = generator.next().value;
      const expectedResult = put(actions.clearSelection());

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
        takeLatest(CLEAR_ALL, clearSauce),
        takeLatest(actions.FETCH_SAUCES, getSauce)
      ]);

      expect(nextValue).to.deep.equal(expectedResult);
    });

    it('should be done', () => {
      nextValue = generator.next().done;

      expect(nextValue).to.equal(true);
    });
  });
});
