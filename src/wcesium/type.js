/*
 * @Author: wangchaoxu
 * @Date: 2020-07-16 15:59:30
 * @LastEditors: wangchaoxu
 * @LastEditTime: 2020-07-16 18:46:55
 * @Description:
 */
function type(value) {
  let type = typeof value;
  if (type !== 'object') {
    return type;
  }
  return Object.prototype.toString.call(value).replace(/^\[object (\S+)\]$/, '$1');
}
export const isString = value => type(value) === 'String';
export const isNumber = value => type(value) === 'Number';
export const isObject = value => type(value) === 'Object';
export const isFunction = value => type(value) === 'function';
export const isArray = value => type(value) === 'Array';
export const isNull = value => type(value) === 'Null';
export const isUndefined = value => type(value) === 'Undefined';
