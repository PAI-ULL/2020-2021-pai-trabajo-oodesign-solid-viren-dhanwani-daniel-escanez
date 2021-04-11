/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Viren Sajju Dhanwani Dhanwani
  * @author José Daniel Escánez Expósito
  * @since 03.Apr.2021
  * @desc Code that follows the Single Responsability Principle
  *     "There should never be more than a reason for a class to change"
  *     In this code the responsibilities are properly separared,
  *     the car runs and the mechanic changes the oil, achieving a better
  *     work distribution
  * @see https://en.wikipedia.org/wiki/Single-responsibility_principle
  */

'use strict';

/** Class that simulates a car */
class Car {
  /**
   * Creates a car
   * @param {string} model
   * @param {number} km
   */
  constructor(model, km) {
    this.model_ = model;
    this.km_ = km;
  }
  /**
   * Prints 'running' representing a more complex proccess
   */
  run() {
    console.log('running');
  }
  /**
   * Creates a string with the formated car
   * @return {string}
   */
  toString() {
    return this.model_ + ' (' + this.km_ + ')';
  }
}

/** Class that simulates a mechanic */
class Mechanic {
  /**
   * Prints information representing a complex proccess that is this class' responsibility
   * @param {Car} car which oil will be changed
   */
  changeOil(car) {
    console.log('changing oil of ' + car.toString());
  }
}

const car = new Car('BMW', 19000);
const MECHANIC = new Mechanic();

car.run();
MECHANIC.changeOil(car);
