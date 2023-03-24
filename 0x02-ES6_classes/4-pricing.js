/* eslint no-underscore-dangle: 0 */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw TypeError('amount must be a number');
    }
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw TypeError('currency must be an instance of Currency');
    }
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof number !== 'number' && typeof conversionRate !== 'number') {
      throw TypeError('both number and conversion rate must be a number');
    }
    return amount * conversionRate;
  }
}
