/**
 * @Author: JoseMunoz
 * @Date:   2018-08-02T13:57:30-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-08-02T13:58:35-06:00
 */

export const processOrder = data => new Promise(resolve => {
  setTimeout(() => resolve({ status: 200 }), 300);
});
