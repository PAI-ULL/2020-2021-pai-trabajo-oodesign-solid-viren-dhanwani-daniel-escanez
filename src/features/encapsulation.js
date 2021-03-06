/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Viren Sajju Dhanwani Dhanwani
  * @author José Daniel Escánez Expósito
  * @since 30.Mar.2021
  * @desc True Encapsulation example
  * @see https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/
  */

'use strict';

/**
 * Class that defines a private variable that can only be modified with methods
 */
class Counter {
  /** @type {number} Times that the counter has been clicked */
  #count = 0;
  /** Increases the counter by 1 unit */
  click() {
    this.#count += 1;
  }
  /**
   * Access the current count value
   * @return {number} Value of count
   */
  getCount() {
    return this.#count;
  }
}

const myCounter = new Counter();
console.log(myCounter.getCount());

for (let i = 0; i < 4; i++) {
  myCounter.click();
  console.log(myCounter.getCount());
}
