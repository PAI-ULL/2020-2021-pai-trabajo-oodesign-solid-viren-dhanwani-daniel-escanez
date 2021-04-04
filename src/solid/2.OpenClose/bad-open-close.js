/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Viren Sajju Dhanwani Dhanwani
  * @author José Daniel Escánez Expósito
  * @since 03.Apr.2021
  * @desc Code that does not follow the Open/Closed Principle
  * @see https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle
  */

'use strict';

/** Class that simulates a transportation */
class Transportation {
  /**
   * Creates a Transportation
   * @param {string} transporter
   * @param {number} volume
   */
  constructor(transporter, volume) {
    this.transporter_ = transporter;
    this.volume_ = volume;
  }
  /**
   * Calculates the price of the transportation
   * @return {mumber}
   */
  calculatePrice() {
    if (this.transporter_ === 'Truck') {
      return 500 * this.volume_;
    } else if (this.transporter_ === 'Ship') {
      return 300 * this.volume_;
    }
  }
}

const TRANSPORTER1 = new Transportation('Truck', 10);
const TRANSPORTER2 = new Transportation('Ship', 10);

console.log(TRANSPORTER1.calculatePrice()); // 5000
console.log(TRANSPORTER2.calculatePrice()); // 3000
