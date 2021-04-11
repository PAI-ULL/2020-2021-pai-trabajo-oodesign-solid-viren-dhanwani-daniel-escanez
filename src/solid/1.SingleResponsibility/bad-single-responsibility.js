/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Viren Sajju Dhanwani Dhanwani
  * @author José Daniel Escánez Expósito
  * @since 03.Apr.2021
  * @desc Code that does not follow the Single Responsability Principle
  *     "There should never be more than a reason for a class to change"
  *     In this code it is displayed a car changing its own oil. This action
  *     could be made by another entity, achieving a better work distribution
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
  /**
   * Prints 'changing oil' representing a more complex proccess
   *     that is not this class' responsibility
   */
  changeOil() {
    console.log('changing oil of ' + this.toString());
  }
}

const car = new Car('BMW', 19000);

car.run();
car.changeOil(); // it is not this class' responsibility
