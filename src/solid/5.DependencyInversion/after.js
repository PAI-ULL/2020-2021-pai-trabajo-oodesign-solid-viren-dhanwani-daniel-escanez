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

class Car {
  constructor(brand, model, engine) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
  }
  getInfo() {
    console.log(this.brand, this.model, this.engine.getVolume());
  }
}

class Engine {
  constructor(volume, type) {
    this.volume = volume;
    this.type = type;
  }
  getVolume() {
    return this.volume;
  }
}

class VWEngine extends Engine {
  constructor() {
    super("1.2", "internal-combustion");
  }
}

class RenaultEngine extends Engine {
  constructor() {
    super("1.6", "diesel");
  }
}

const engine = new RenaultEngine();
const car = new Car('VW', 'Golf', engine);

car.getInfo(); // VW Golf 1.6
