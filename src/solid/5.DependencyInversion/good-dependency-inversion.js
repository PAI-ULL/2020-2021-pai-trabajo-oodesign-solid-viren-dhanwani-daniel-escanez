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
   * @param {string} brand Brand of the car
   * @param {number} model Model number of the car
   * @param {Engine} engine Type of engine used in the car
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
  /**
   * Creates a VWEngine
   * @param {number} volume
   * @param {string} type
   */
  constructor(volume, type) {
    this.volume_ = volume;
    this.type_ = type;
  }
  /**
   * Gets the volume_ value
   * @return {number}
   */
  getVolume() {
    return this.volume_;
  }
}

/** Class that simulates a VWEngine */
class VWEngine extends Engine {
  /** Creates a VWEngine */
  constructor() {
    super(1.2, 'internal-combustion');
  }
}

/** Class that simulates a RenaultEngine */
class RenaultEngine extends Engine {
  /** Creates a RenaultEngine */
  constructor() {
    super(1.6, 'diesel');
  }
}

const engineRenault = new RenaultEngine();
const engineVW = new VWEngine();
const carRenault = new Car('Renault', 'Clio', engineRenault);
const carVW = new Car('VW', 'Golf', engineVW);

carRenault.getInfo(); // Renault Clio 1.6
carVW.getInfo(); // VW Golf 1.2
