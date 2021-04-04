/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Viren Sajju Dhanwani Dhanwani
  * @author José Daniel Escánez Expósito
  * @since 03.Apr.2021
  * @desc Code that does not follow the Liskov Substitution Principle
  * @see https://en.wikipedia.org/wiki/Liskov_substitution_principle
  */

'use strict';

/** Class that simulates a bird */
class Bird {
  /**
   * Create a formated string with the speed of the bird
   * @param {number} speed
   * @return {string}
   */
  fly(speed) {
    return 'Flying at ' + speed + ' km/h';
  }
}

/** Class that simulates a penguin making an LSP Violation*/
class Penguin extends Bird {
  /**
   * The method can't do the same of the super fly, making an LSP Violation
   * @throws {Error}
   */
  fly() {
    throw new Error('Sorry, I cannot fly :o(');
  }
}

try {
  const penguin = new Penguin();
  console.log(penguin.fly());
} catch (err) {
  console.log(err.message);
}
