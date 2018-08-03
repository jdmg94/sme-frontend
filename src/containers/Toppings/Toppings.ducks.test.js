/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T13:50:43-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-01T14:23:25-06:00
 */
 import { expect } from 'chai';
 import { head } from 'lodash';
 import reducer from './Toppings.ducks';
 import {
   selectTopping,
   removeTopping,
   SELECT_OPTION,
   REMOVE_OPTION,
 } from './Toppings.ducks';
 import { data as options } from '../../data/toppings.json';


 describe('Toppings ducks', () => {
   const selection = head(options);

   it('should set the selected option in the reducer', () => {
     const expectedResult = {
       type: SELECT_OPTION,
       payload: { selection },
     };

     expect(selectTopping(selection)).to.deep.equal(expectedResult);
   });

   it('should clear any value previusly selected', () => {
     const expectedResult = {
       type: REMOVE_OPTION,
       payload: { selection }
     };

     expect(removeTopping(selection)).to.deep.equal(expectedResult);
   });

   describe('reducer', () => {


     it('should process SELECT_OPTION action', () => {
       const action = {
         type: SELECT_OPTION,
         payload: { selection }
       };

       const state = {
         options,
         selection: []
       };

       const expectedResult = {
         options,
         selection: [selection],
       };

       const newState = reducer(state, action);

       expect(newState).to.deep.equal(expectedResult);
     });

     it('should process REMOVE_OPTION action', () => {
       const state = {
         options,
         selection: [selection],
       };

       const action = {
         payload: { selection },
         type: REMOVE_OPTION,
       };

       const expectedResult = {
         options,
         selection: [],
       };

       const newState = reducer(state, action);

       expect(newState).to.deep.equal(expectedResult);
     });
   });
 });
