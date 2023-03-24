/* eslint no-underscore-dangle: 0 */
export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  set code(code) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw TypeError('code must be a string');
    }
  }

  set name(name) {
    if (typeof name === 'string') {
      this._currency = name;
    } else {
      throw TypeError('name must be a string');
    }
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._currency;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
