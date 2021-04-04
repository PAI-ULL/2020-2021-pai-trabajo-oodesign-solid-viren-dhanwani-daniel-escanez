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

/** Class that simulates a employee */
class Employee {
  /**
   * The constractor throws an error if you try to create an object of
   *     this base class. You can create an instance of a derived class
   * @throws {Error}
   */
  constructor() {
    if (this.constructor === Employee) {
      throw new Error('Object of Abstract Class cannot be created');
    }
  }
  /**
   * Throws an error if you try to ejectute the method
   * @throws {Error}
   */
  display() {
    throw new Error('Abstract Method has no implementation');
  }
}
/** Class that simulates a manager */
class Manager extends Employee {
  /**
   * Hide the super class method and prints a message instead
   */
  display() {
    console.log('I am a Manager');
  }
}

const MANAGER = new Manager();
MANAGER.display();
