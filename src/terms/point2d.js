/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Viren Sajju Dhanwani Dhanwani
  * @author José Daniel Escánez Expósito
  * @since 30.Mar.2021
  * @see https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes
  */

'use strict';

/** Class that simulates a 2D Point */
export class Point2D {
  /**
   * Create a point2d
   * @param {number} [abscissa = 0]
   * @param {number} [ordinate = 0]
   */
  constructor(abscissa = 0, ordinate = 0) {
    /** @private {number} */
    this.abscissa_ = abscissa;
    /** @private {number} */
    this.ordinate_ = ordinate;
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
  /**
   * Static method that calculates the distance between two point2ds
   * @param {Point2D} firstPoint First point2d
   * @param {Point2D} secondPoint Second point2d
   * @return {Number} Distance between firstPoint and secondPoint
   */
  static staticDistance(firstPoint = new Point2D(), secondPoint = new Point2D()) {
    const ABSCISSA_DISTANCE = firstPoint.getAbscissa() - secondPoint.getAbscissa();
    const ORDINATE_DISTANCE = firstPoint.getOrdinate() - secondPoint.getOrdinate();
    return Math.sqrt(ABSCISSA_DISTANCE ** 2 + ORDINATE_DISTANCE ** 2);
  }
  /**
   * Calculates the distance between the instance point2d and the given point2d
   * @param {Point2D} anotherPoint2D Will be used to calculate the distance
   * @return Distance between the instance point2d and anotherPoint2D
   */
  instanceDistance(anotherPoint2D = new Point2D()) {
    const ABSCISSA_DISTANCE = this.abscissa_ - anotherPoint2D.getAbscissa();
    const ORDINATE_DISTANCE = this.ordinate_ - anotherPoint2D.getOrdinate();
    return Math.sqrt(ABSCISSA_DISTANCE ** 2 + ORDINATE_DISTANCE ** 2);
  }
  /**
   * Uses the static method to simulate the instanceDistance
   * @param {Point2D} anotherPoint2D
   * @return Distance between the instance point2d and anotherPoint2D
   */
  instanceDistanceUsingStatic(anotherPoint2D = new Point2D()) {
    return Point2D.staticDistance(this, anotherPoint2D);;
  }
}
