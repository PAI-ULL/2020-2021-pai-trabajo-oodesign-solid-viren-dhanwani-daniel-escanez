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
  * @see https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle
  */

'use strict';

class Transporter {
  constructor(type) {
    this.type_ = type;
  }
  calculatePrice() {
    if (this.constructor === Transporter) {
      throw new Error('Object of Abstract Class cannot be created');
    }
  };
}

class Ship extends Transporter {
  constructor() {
    super('Ship');
  }
  calculatePrice() {
    return 300;
  }
}

class Truck extends Transporter {
  constructor() {
    super('Truck');
  }
  calculatePrice() {
    return 500;
  }
}

class Plane extends Transporter {
  constructor() {
    super('Plane');
  }
  calculatePrice() {
    return 1000;
  }
}

class Transportation {
  constructor(transporter, volume) {
    this.transporter = transporter;
    this.volume = volume;
  }
  calculatePrice() {
    return this.transporter.calculatePrice() * this.volume;
  }
}

const SHIP_TRANSPORTER = new Ship();
const TRUCK_TRANSPORTER = new Truck();
const PLANE_TRANSPORTER = new Plane();
const TRANSPORTATION1 = new Transportation(SHIP_TRANSPORTER, 10);
const TRANSPORTATION2 = new Transportation(TRUCK_TRANSPORTER, 10);
const TRANSPORTATION3 = new Transportation(PLANE_TRANSPORTER, 10);

console.log(TRANSPORTATION1.calculatePrice()); // 3000
console.log(TRANSPORTATION2.calculatePrice()); // 5000
console.log(TRANSPORTATION3.calculatePrice()); // 10000
