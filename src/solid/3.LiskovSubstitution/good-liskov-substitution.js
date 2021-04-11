/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Viren Sajju Dhanwani Dhanwani
  * @author José Daniel Escánez Expósito
  * @since 03.Apr.2021
  * @desc Code that follows the Liskov Substitution Principle
  *     "Objects in a program should be replaceable with instances of their
  *     subtypes without altering the correctness of that program"
  *     This code follows the principle because the Eagle class can act as
  *     a Bird or an Eagle indistinctly
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

/** Class that simulates a eagle */
class Eagle extends Bird {
  /** An eagle diving
   * @return {String} Information about the eagle diving
   */
  dive() {
    return 'Eagle diving';
  }
  /**
   * Create a formated string with the speed of the eagle
   * @param {number} speed
   * @return {string}
   */
  fly(speed) {
    return 'Eagle flying at ' + speed + ' km/h';
  }
}

const eagle = new Eagle();
console.log(eagle.fly(100));
console.log(eagle.dive());
