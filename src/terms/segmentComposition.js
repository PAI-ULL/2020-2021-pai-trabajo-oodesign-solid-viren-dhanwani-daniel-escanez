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
export class SegmentComposition {
  /**
   * Create a segment
   * @param {Point2D} firstPoint
   * @param {Point2D} secondPoint
   */
  constructor(firstPoint = new Point2D(), secondPoint = new Point2D()) {
    this.firstPoint_ = firstPoint;
    this.secondPoint_ = secondPoint;
  }
  /**
   * The length of the segment
   * @return {number} Distance between firstPoint_ and secondPoint_
   */
  length() {
    return this.firstPoint_.instanceDistance(this.secondPoint_);
  }
}
