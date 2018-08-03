/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T22:30:30-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T10:56:11-06:00
 */
import { data } from '../data/dough.json';

export const fetchDough = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(data), 1000);
  });
}
