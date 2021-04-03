/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Viren Sajju Dhanwani Dhanwani
  * @author José Daniel Escánez Expósito 
  * @since 30.Mar.2021
  * @desc True encapsulation example
  * @see https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/Private_class_fields
  */

'use strict';

/**
 * Class that defines a private variable count that can only be modified through methods
 */
class Counter {
  /** @type {Number} Times that the counter has been clicked */
  #count = 0;

  /** Increases the counter by 1 unit */
  click() {
    this.#count += 1;
  }

  /**
   * Access the current count value
   * @return {Number} Value of count
   */
  getCount() {
    return this.#count.toString()
  }
}
const myCounter = new Counter();
console.log(myCounter.getCount());
myCounter.click();
console.log(myCounter.getCount());
myCounter.click();
console.log(myCounter.getCount());
myCounter.click();
console.log(myCounter.getCount());
