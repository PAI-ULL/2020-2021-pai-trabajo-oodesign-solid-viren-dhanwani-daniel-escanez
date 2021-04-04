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

class Bird {
  fly(speed) {
    return `Flying at ${speed} km/h`;
  }
}

// LSP Violation:
class Penguin extends Bird {
  fly() {
    return new Error("Sorry, I cant fly");
  }
}

const penguin = new Penguin();
console.log(penguin.fly());
