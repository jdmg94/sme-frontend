/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T11:00:02-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T09:35:14-06:00
 */
import { expect } from 'chai';
import { head } from 'lodash';
import reducer from './Dough.ducks';
import {
  selectDough,
  clearSelection,
  SELECT_OPTION,
  REMOVE_OPTION,
} from './Dough.ducks';
import { data as options } from '../../data/dough.json';


describe('Dough ducks', () => {
  const selection = head(options);

  it('should set the selected option in the reducer', () => {

    const expectedResult = {
      type: SELECT_OPTION,
      payload: { selection },
    };

    expect(selectDough(selection)).to.deep.equal(expectedResult);
  });

  it('should clear any value previusly selected', () => {
    const expectedResult = { type: REMOVE_OPTION };

    expect(clearSelection()).to.deep.equal(expectedResult);
  });

  describe('reducer', () => {


    it('should process SELECT_OPTION action', () => {
      const action = {
        type: SELECT_OPTION,
        payload: { selection }
      };

      const state = {
        options,
        selection: {}
      };

      const expectedResult = {
        options,
        selection,
      };

      const newState = reducer(state, action);

      expect(newState).to.deep.equal(expectedResult);
    });

    it('should process REMOVE_OPTION action', () => {
      const state = { options, selection };
      const action = { type: REMOVE_OPTION };
      const expectedResult = {
        options,
        selection: {}
      };

      const newState = reducer(state, action);

      expect(newState).to.deep.equal(expectedResult);
    });
  });
});
