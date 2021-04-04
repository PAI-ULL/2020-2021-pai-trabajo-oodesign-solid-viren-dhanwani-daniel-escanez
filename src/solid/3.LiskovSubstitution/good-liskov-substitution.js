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
  * @see https://en.wikipedia.org/wiki/Liskov_substitution_principle
  */

'use strict';

class Bird {
  fly(speed) {
    return `Flying at ${speed} km/h`;
  }
}

class Eagle extends Bird {
  dive() {
    return 'Eagle diving';
  }
  fly(speed) {
    return `Eagle flying at ${speed} km/h`;
  }
}

const eagle = new Eagle();
console.log(eagle.fly(100));
console.log(eagle.dive());
