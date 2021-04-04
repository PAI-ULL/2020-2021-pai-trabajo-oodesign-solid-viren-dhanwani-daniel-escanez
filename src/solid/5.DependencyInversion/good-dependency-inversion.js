/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Viren Sajju Dhanwani Dhanwani
  * @author José Daniel Escánez Expósito
  * @since 03.Apr.2021
  * @desc Code that follows the Dependency Inversion Principle
  * @see https://en.wikipedia.org/wiki/Dependency_inversion_principle
  */

'use strict';

/** Class that simulates a car */
class Car {
  /**
   * Creates a car
   * @param {string} brand
   * @param {number} model
   * @param {Engine} enegine
   */
  constructor(brand, model, engine) {
    this.brand_ = brand;
    this.model_ = model;
    this.engine_ = engine;
  }
  /** Prints info about the car */
  getInfo() {
    console.log(this.brand_, this.model_, this.engine_.getVolume());
  }
}

/** Class that simulates a engine */
class Engine {
  constructor(volume, type) {
    this.volume_ = volume;
    this.type_ = type;
  }
  getVolume() {
    return this.volume_;
  }
}

class VWEngine extends Engine {
  constructor() {
    super(1.2, 'internal-combustion');
  }
}

class RenaultEngine extends Engine {
  constructor() {
    super(1.6, 'diesel');
  }
}

const engine = new RenaultEngine();
const car = new Car('VW', 'Golf', engine);

car.getInfo(); // VW Golf 1.6
