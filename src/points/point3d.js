/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Viren Sajju Dhanwani Dhanwani
  * @author José Daniel Escánez Expósito
  * @since 30.Mar.2021
  * @see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
  */

import {Point2D} from './point2d.js';

'use strict';

/** Class that simulates a 3D Point */
export class Point3D extends Point2D {
  /**
   * Create a Point3D
   * @param {number} [abscissa = 0]
   * @param {number} [ordinate = 0]
   * @param {number} [applicate = 0]
   */
  constructor(abscissa = 0, ordinate = 0, applicate = 0) {
    super(abscissa, ordinate);
    /** @private {number} */
    this.applicate_ = applicate;
  }
  /**
   * Get the applicate_ value
   * @return {number}
   */
  getApplicate() {
    return this.applicate_;
  }
  /**
   * Set the applicate_ value
   * @param {number} applicate
   */
  setApplicate(applicate) {
    /** @private */
    this.applicate_ = applicate;
  }
  /**
   * Static method that calculates the distance between two Point3Ds
   * @param {Point3D} firstPoint First Point3D
   * @param {Point3D} secondPoint Second Point3D
   * @return {Number} Distance between firstPoint and secondPoint
   */
  static staticDistance(firstPoint = new Point3D(), secondPoint = new Point3D()) {
    const ABSCISSA_DISTANCE = firstPoint.getAbscissa() - secondPoint.getAbscissa();
    const ORDINATE_DISTANCE = firstPoint.getOrdinate() - secondPoint.getOrdinate();
    const APPLICATE_DISTANCE = firstPoint.getApplicate() - secondPoint.getApplicate();
    return Math.sqrt(ABSCISSA_DISTANCE ** 2 +
        ORDINATE_DISTANCE ** 2 + APPLICATE_DISTANCE ** 2);
  }
  /**
   * Calculates the distance between the instance Point3D and the given Point3D
   * @param {Point3D} anotherPoint3D Will be used to calculate the distance
   * @return {number} Distance between the instance Point3D and anotherPoint3D
   */
  instanceDistance(anotherPoint3D = new Point3D()) {
    const ABSCISSA_DISTANCE = this.abscissa_ - anotherPoint3D.getAbscissa();
    const ORDINATE_DISTANCE = this.ordinate_ - anotherPoint3D.getOrdinate();
    const APPLICATE_DISTANCE = this.getApplicate() - anotherPoint3D.getApplicate();
    return Math.sqrt(ABSCISSA_DISTANCE ** 2 +
        ORDINATE_DISTANCE ** 2 + APPLICATE_DISTANCE ** 2);
  }
  /**
   * Uses the static method to simulate the instanceDistance
   * @param {Point3D} anotherPoint3D
   * @return {number} Distance between the instance Point3D and anotherPoint3D
   */
  instanceDistanceUsingStatic(anotherPoint3D = new Point3D()) {
    return Point3D.staticDistance(this, anotherPoint3D);
  }
}
