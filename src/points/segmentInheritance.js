/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Viren Sajju Dhanwani Dhanwani
  * @author José Daniel Escánez Expósito
  * @since 30.Mar.2021
  */

import {Point2D} from './point2d.js';

'use strict';

/**
* Class that defines a private variable that can only be modified with methods
*/
export class SegmentInheritance extends Point2D {
  /**
   * Create a segment
   * @param {Point2D} initPoint
   * @param {Point2D} endPoint
   */
  constructor(initPoint = new Point2D(), endPoint = new Point2D()) {
    super(initPoint.getAbscissa(), initPoint.getOrdinate());
    this.endPoint_ = endPoint;
  }
  /**
   * The length of the segment
   * @return {number} Distance between this instance of Point2D and endPoint_
   */
  length() {
    return this.instanceDistance(this.endPoint_);
  }
}
