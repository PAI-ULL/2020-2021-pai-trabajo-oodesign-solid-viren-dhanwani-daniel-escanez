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
  * @see https://en.wikipedia.org/wiki/Single-responsibility_principle
  */

'use strict';

class Car {
  constructor(model, km) {
    this.model = model;
    this.km = km;
  }
  run() {
    console.log("running");
  }
}

class Mechanic {
  changeOil() {
    console.log("changing oil");
  }
}

const CAR = new Car('BMW', 19000);
const MECHANIC = new Mechanic();

CAR.run();
MECHANIC.changeOil();