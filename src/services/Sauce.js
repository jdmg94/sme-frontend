/**
 * @Author: JoseMunoz
 * @Date:   2018-08-01T22:33:40-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T10:56:16-06:00
 */
import { data } from '../data/sauces.json';

export const fetchSauce = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(data), 800);
  })
}
