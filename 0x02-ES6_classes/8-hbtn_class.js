/* eslint no-underscore-dangle: 0 */
/* eslint no-else-return: 0 */

export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set size(size) {
    if (typeof size !== 'number') {
      throw TypeError('size must be a number');
    }
    this._name = size;
  }

  set location(location) {
    if (typeof location !== 'string') {
      throw TypeError('location must be a string');
    }
    this._code = location;
  }

  get size() {
    return this._name;
  }

  get location() {
    return this._code;
  }

  [Symbol.toPrimitive](type) {
    if (type === 'number') {
      return this.size;
    } else if (type === 'string') {
      return this.location;
    }
    return undefined;
  }
}
