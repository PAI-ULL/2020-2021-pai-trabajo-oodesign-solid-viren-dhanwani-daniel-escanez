/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Viren Sajju Dhanwani Dhanwani
  * @author José Daniel Escánez Expósito 
  * @since 30.Mar.2021
  * @desc Showcasing static methods
  * @see https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes
  */

'use strict';

class Point {
  constructor(abscissa = 0, ordinate = 0) {
    this.abscissa_ = abscissa;
    this.ordinate_ = ordinate;
  }

  static distance(a, b) {
    const abscissaDistance = a.abscissa_ - b.abscissa_;
    const ordenateDistance = a.ordinate_ - b.ordinate_;
    return Math.sqrt(abscissaDistance * abscissaDistance +
        ordenateDistance * ordenateDistance);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755
