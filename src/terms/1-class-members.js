/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Viren Sajju Dhanwani Dhanwani
  * @author José Daniel Escánez Expósito 
  * @since 30.Mar.2021
  * @desc Showcasing difference between class and instance variables
  * @see https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/Public_class_fields
  */

'use strict';

/**
 * Generic Class with class and instance variables
 */
class GenericClass {
  instanceVariable = 10;
  static staticVariable = 10;

  constructor(value) {
    this.instanceVariable += value;
  }
}

const instance1 = new GenericClass(5);
const instance2 = new GenericClass(10);

console.log(instance1.instanceVariable);
console.log(instance2.instanceVariable);
console.log(GenericClass.staticVariable);
