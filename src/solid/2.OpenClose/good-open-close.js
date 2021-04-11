/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Viren Sajju Dhanwani Dhanwani
  * @author José Daniel Escánez Expósito
  * @since 03.Apr.2021
  * @desc Code that follows the Open/Closed Principle
  *     "Software entities should be open for extension but closed for modification"
  *     This code follows the principle because there can be multiple vehicles
  *     without modifying the base class, only extending it
  * @see https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle
  */

'use strict';

/** Class that simulates a transporter */
class Transporter {
  /**
   * Creates a Transporter
   * @param {string} type
   */
  constructor(type) {
    this.type_ = type;
  }
  /**
   * Simulates an abstract method throwing an error
   * @throws {Error}
   */
  calculatePrice() {
    if (this.constructor() === Transporter) {
      throw new Error('Object of Abstract Class cannot be created');
    }
  };
}

/** Class that simulates a ship */
class Ship extends Transporter {
  /** Creates a ship */
  constructor() {
    super('Ship');
  }
  /**
   * Calculate the price
   * @return {number}
   */
  calculatePrice() {
    return 300;
  }
}

/** Class that simulates a truck */
class Truck extends Transporter {
  /** Creates a truck */
  constructor() {
    super('Truck');
  }
  /**
   * Calculate the price
   * @return {number}
   */
  calculatePrice() {
    return 500;
  }
}

/** Class that simulates a plane */
class Plane extends Transporter {
  /** Creates a plane */
  constructor() {
    super('Plane');
  }
  /**
   * Calculate the price
   * @return {number}
   */
  calculatePrice() {
    return 1000;
  }
}

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
    return this.transporter_.calculatePrice() * this.volume_;
  }
}

const SHIP_TRANSPORTER = new Ship();
const TRUCK_TRANSPORTER = new Truck();
const PLANE_TRANSPORTER = new Plane();
const TRANSPORTATION1 = new Transportation(SHIP_TRANSPORTER, 10);
const TRANSPORTATION2 = new Transportation(TRUCK_TRANSPORTER, 10);
const TRANSPORTATION3 = new Transportation(PLANE_TRANSPORTER, 10);

console.log(TRANSPORTATION1.calculatePrice()); // -> 3000
console.log(TRANSPORTATION2.calculatePrice()); // -> 5000
console.log(TRANSPORTATION3.calculatePrice()); // -> 10000
