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
  static numberOfInstances_ = 0;
  constructor(abscissa = 0, ordinate = 0) {
    /** @private @const {number} */
    this.abscissa_ = abscissa;
    /** @private @const {number} */
    this.ordinate_ = ordinate;
    numberOfInstances_++;
  }
  /**
   * Get the abscissa_ value
   * @return {number}
   */
  getAbscissa() {
    return this.abscissa_;
  }
  /**
   * Get the ordinate_ value
   * @return {number}
   */
  getOrdinate() {
    return this.ordinate_;
  }
  /**
   * Set the abscissa_ value
   * @param {number} abscissa
   */
  setAbscissa(abscissa) {
    /** @private */
    this.abscissa_ = abscissa;
  }
  /**
   * Set the ordinate_ value
   * @param {number} ordinate
   */
  setOrdinate(ordinate) {
    /** @private */
    this.ordinate_ = ordinate;
  }
  static distance(a = new Point(), b = new Point()) {
    const ABSCISSA_DISTANCE = a.abscissa_ - b.abscissa_;
    const ORDINATE_DISTANCE = a.ordinate_ - b.ordinate_;
    return Math.sqrt(ABSCISSA_DISTANCE ** 2 + ORDINATE_DISTANCE ** 2);
  }
  distance(anotherPoint = new Point()) {
    const ABSCISSA_DISTANCE = this.abscissa_ - anotherPoint.getAbscissa();
    const ORDINATE_DISTANCE = this.ordinate_ - anotherPoint.getOrdinate();
    return Math.sqrt(ABSCISSA_DISTANCE ** 2 + ORDINATE_DISTANCE ** 2);
  }
  distance(anotherPoint = new Point()) {
    return Point.distance(this, anotherPoint);;
  }
}

const FIRST_POINT = new Point(5, 5);
const SECOND_POINT = new Point(10, 10);

console.log(Point.distance(FIRST_POINT, SECOND_POINT)); // 7.0710678118654755
