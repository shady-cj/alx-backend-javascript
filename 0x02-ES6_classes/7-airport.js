/* eslint no-underscore-dangle: 0 */
export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('name must be a string');
    }
    this._name = name;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw TypeError('code must be a string');
    }
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  get [Symbol.toStringTag]() {
    return this.code;
  }
}
