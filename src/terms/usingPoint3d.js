/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Viren Sajju Dhanwani Dhanwani
  * @author José Daniel Escánez Expósito
  * @since 30.Mar.2021
  * @desc Using the class Point3D
  */

import { Point3D } from './point3d.js';

'use strict';

const ORIGIN = new Point3D();
const POINT_3D = new Point3D(3, 4, 5);

console.log('staticDistance: ' + Point3D.staticDistance(ORIGIN, POINT_3D)); // 5
console.log('instanceDistance: ' + ORIGIN.instanceDistance(POINT_3D)); // 5
console.log('instanceDistanceUsingStatic: ' +
    ORIGIN.instanceDistanceUsingStatic(POINT_3D)); // 5
