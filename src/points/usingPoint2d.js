/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Viren Sajju Dhanwani Dhanwani
  * @author José Daniel Escánez Expósito
  * @since 30.Mar.2021
  * @desc Using the class Point2D
  */

import {Point2D} from './point2d.js';

'use strict';

const ORIGIN = new Point2D();
const POINT_2D = new Point2D(3, 4);

console.log('staticDistance: ' + Point2D.staticDistance(ORIGIN, POINT_2D)); // 5
console.log('instanceDistance: ' + ORIGIN.instanceDistance(POINT_2D)); // 5
console.log('instanceDistanceUsingStatic: ' +
    ORIGIN.instanceDistanceUsingStatic(POINT_2D)); // 5
