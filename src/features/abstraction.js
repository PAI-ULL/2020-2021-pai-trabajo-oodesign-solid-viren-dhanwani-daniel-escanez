/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Viren Sajju Dhanwani Dhanwani
  * @author José Daniel Escánez Expósito 
  * @since 31.Mar.2021
  * @desc Forcing abstract classes in JavaScript
  * @see https://www.educba.com/abstract-classes-in-javascript/
  */

'use strict';

class Employee {
  constructor() {
    if (this.constructor == Employee) {
      throw new Error(" Object of Abstract Class cannot be created");
    }
  }
  display() {
    throw new Error("Abstract Method has no implementation");
  }
}
class Manager extends Employee {
  display() {
    console.log("I am a Manager");
  }
}
const MANAGER = new Manager();
MANAGER.display();
