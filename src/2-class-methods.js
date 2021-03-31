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
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  static distance (a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt (dx * dx + dy * dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755