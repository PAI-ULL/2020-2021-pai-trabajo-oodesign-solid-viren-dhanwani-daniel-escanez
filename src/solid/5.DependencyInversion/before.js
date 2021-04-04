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

class Car {
  constructor(brand, model) {
    this.engine = new VWEngine(); 
    this.brand = brand;
    this.model = model;
  }
  getInfo() {
    console.log(this.brand, this.model, this.engine.volume);
  }
} 
class VWEngine {
  constructor(brand, model) {
    this.volume = "1.2";
    this.type = "internal—combustion";
  }
}

const car = new Car('VW', 'Golf');
car.getInfo(); //VW Golf 1.2
