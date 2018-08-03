/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T22:38:06-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T11:05:46-06:00
 */
import { data } from '../data/toppings.json';

export const fetchToppings = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(data), 1000);
  })
};
