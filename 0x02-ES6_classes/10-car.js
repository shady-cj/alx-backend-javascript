/* eslint no-underscore-dangle: 0 */

export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color
  }
  
  set brand(brand) {
    if (typeof brand !== 'string') {
    throw TypeError('brand must be a string');
    }
    this._brand = brand;
  }
  
  set motor(motor) {
    if (typeof motor !== 'string') {
    throw TypeError('motor must be a string');
    }
    this._motor = motor;
  }
    
  set color(color) {
    if (typeof color !== 'string') {
    throw TypeError('color must be a string');
    }
    this._color = color;
  }
    
  get brand() {
    return this._brand;
  }
  
  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    const clone = this.constructor[Symbol.species];
    console.log(clone);
  }
}
  