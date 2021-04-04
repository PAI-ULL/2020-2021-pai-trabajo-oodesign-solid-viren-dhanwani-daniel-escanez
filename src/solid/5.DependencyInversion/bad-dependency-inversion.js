/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Viren Sajju Dhanwani Dhanwani
  * @author José Daniel Escánez Expósito
  * @since 03.Apr.2021
  * @desc Code that does not follow the Dependency Inversion Principle
  * @see https://en.wikipedia.org/wiki/Dependency_inversion_principle
  */

'use strict';

/** Class that simulates a car */
class Car {
  /**
   * Creates a car
   * @param {string} brand
   * @param {number} model
   */
  constructor(brand, model) {
    this.brand_ = brand;
    this.model_ = model;
    this.engine_ = new VWEngine(); 
  }
  /** Prints info about the car */
  getInfo() {
    console.log(this.brand_, this.model_, this.engine_.volume_);
  }
}
/** Class that simulates a VWEngine */
class VWEngine {
  /** Creates a VWEngine */
  constructor() {
    this.volume_ = 1.2;
    this.type_ = 'internal—combustion';
  }
}

const car = new Car('VW', 'Golf');
car.getInfo(); //VW Golf 1.2
